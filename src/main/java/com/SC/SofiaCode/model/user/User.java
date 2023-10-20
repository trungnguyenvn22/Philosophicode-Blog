package com.SC.SofiaCode.model.user;

import com.SC.SofiaCode.model.Post;
import com.SC.SofiaCode.model.User_Post_Liked;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name = "user")
public class User implements UserDetails {

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date(System.currentTimeMillis());
    }
    @PreUpdate
    protected void onUpdate(){
        this.updateAt = new Date(System.currentTimeMillis());
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "user_name", nullable = false, unique = true)
    private String userName;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "gender")
    private String gender;

    @Column(name = "status")
    private Integer status;

    public String getUserName() {
        return userName;
    }

    @Column(name = "is_delete")
    private Boolean isDelete;



    @Column(name = "address")
    private String address;


    @Temporal(TemporalType.DATE)
    @Column(name = "created_at")
    private Date createdAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "update_at")
    private Date updateAt;
    public User(String userName, String email, String password, Set<Role> roles){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
    public User(String email, Set<Role> roles){
        this.email = email;
        this.roles = roles;
    }

    @ManyToMany
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "roles_id"))
    private Set<Role> roles = new LinkedHashSet<>();

    @OneToMany(mappedBy = "user")
    Set<User_Post_Liked> userPostLiked;

    // method implement
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        roles.stream().forEach(i->authorities.add(new SimpleGrantedAuthority(i.getTitle())));
        return List.of(new SimpleGrantedAuthority(authorities.toString()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}