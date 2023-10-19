package com.SC.SofiaCode.repository.user;

import com.SC.SofiaCode.model.user.Role;
import com.SC.SofiaCode.model.user.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.PrePersist;
import org.hibernate.Session;
import org.hibernate.query.NativeQuery;
import org.hibernate.transform.Transformers;
import org.hibernate.type.StandardBasicTypes;
import org.springframework.stereotype.Repository;

import javax.xml.crypto.dsig.Transform;
import java.util.List;

@Repository

public class RoleCustomRepository {
    @PersistenceContext
    private EntityManager entityManager;

    public List<Role> getRole(User user){
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT r.title as title\n" +
                " FROM roles r Join user_roles ur on r.id = ur.roles_id \n" +
                " join user u on u.id = ur.user_id \n"+
                "Where 1=1");
        if(user.getEmail()!= null){
            sql.append(" and email=:email");
        }
        NativeQuery<Role> query = ((Session) entityManager.getDelegate()).createNativeQuery(sql.toString());
        if (user.getEmail() != null){
            query.setParameter("email",user.getEmail());
        }
        query.addScalar("title", StandardBasicTypes.STRING);
        query.setResultTransformer(Transformers.aliasToBean(Role.class));
        return query.list();



    }
}
