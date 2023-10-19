package com.SC.SofiaCode.service;

import com.SC.SofiaCode.model.user.User;
import com.SC.SofiaCode.repository.user.RoleCustomRepository;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import com.SC.SofiaCode.repository.user.UserRepository;

import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JwtService {
    @Value("123")
    private String secretKey;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleCustomRepository roleCustomRepository;

    public String generateToken(User user, Collection<SimpleGrantedAuthority> authorities){
        Algorithm algorithm = Algorithm.HMAC256(secretKey.getBytes());
        return JWT.create()
                .withSubject(user.getEmail())
                .withExpiresAt(new Date(System.currentTimeMillis()+50*60*1000))
                .withClaim("roles",authorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);

    }

    public String generateFreshToken(User user, Collection<SimpleGrantedAuthority> authorities){
        Algorithm algorithm = Algorithm.HMAC256(secretKey.getBytes());
        return JWT.create()
                .withSubject(user.getEmail())
                .withExpiresAt(new Date(System.currentTimeMillis()+70*60*1000))
                .sign(algorithm);

    }

}
