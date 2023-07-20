package com.pranitproject.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pranitproject.entity.IndianUser;

@Repository
public interface UserDaoJpa extends JpaRepository<IndianUser, String>{
	
	@Query("from com.pranitproject.entity.IndianUser f where f.userName=:ui and f.password=:pw")//login
	public IndianUser login(@Param("ui") String userName, @Param("pw") String password);

	@Query(value="select vote_count from indian_user  where user_name=:user_name", nativeQuery=true)//se user vote or not
	public int voteCount(@Param(value="user_name")String userName);
	
	@Modifying
	@Query(value = "update indian_user set vote_count=:vc where user_name=:user_name  ", nativeQuery = true)//update or add vote
	public void uvote(@Param(value = "user_name") String user_name,@Param(value = "vc") int vc);

	
}