package com.elearning.user.controller;

import com.elearning.user.dto.RegisterRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

@Testcontainers
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AuthControllerTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine");

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void shouldRegisterUserSuccessfully() {
        RegisterRequest request = new RegisterRequest();
        request.setEmail("test@example.com");
        request.setUsername("testuser");
        request.setPassword("password123");
        request.setFullName("Test User");

        ResponseEntity<Map> response = restTemplate.postForEntity(
                "/api/auth/register", request, Map.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody()).containsEntry("message", "Registration successful");
    }

    @Test
    void shouldRejectDuplicateEmail() {
        RegisterRequest first = new RegisterRequest();
        first.setEmail("duplicate@example.com");
        first.setUsername("user1");
        first.setPassword("password123");
        first.setFullName("User One");

        restTemplate.postForEntity("/api/auth/register", first, Map.class);

        RegisterRequest second = new RegisterRequest();
        second.setEmail("duplicate@example.com");
        second.setUsername("user2");
        second.setPassword("password123");
        second.setFullName("User Two");

        ResponseEntity<Map> response = restTemplate.postForEntity(
                "/api/auth/register", second, Map.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }
}
