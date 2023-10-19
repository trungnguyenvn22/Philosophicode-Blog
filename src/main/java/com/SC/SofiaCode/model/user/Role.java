package com.SC.SofiaCode.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name = "roles")
public class Role {

    @PrePersist
    protected void onCreate(){
        this.create_At = new Date(System.currentTimeMillis());
    }
    @PreUpdate
    protected void onUpdate(){
        this.update_At = new Date(System.currentTimeMillis());
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String title;
    private Date create_At;
    private Date update_At;
    private Boolean isDelete;
    public Role(String title){
        this.title = title;

    }

    @ManyToMany(mappedBy = "roles")
    @Fetch(value = FetchMode.SELECT)
    @JsonIgnore
    private Set<User> users = new HashSet<>();


}
