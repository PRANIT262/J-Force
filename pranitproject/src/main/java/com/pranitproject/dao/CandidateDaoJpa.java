package com.pranitproject.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pranitproject.entity.Candidate;

@Repository
public interface CandidateDaoJpa extends JpaRepository<Candidate, String> {

	@Modifying
	@Query(value = "update candidate set total_vote=:cnt where c_name=:c_name  ", nativeQuery = true)//uservote candidate ++
	public void vote(@Param(value = "c_name") String c_name,@Param(value = "cnt") int cnt);

	@Query(value = "select total_vote from candidate where c_name=:c_name",nativeQuery = true)//to see privios votes
	public int getCount(@Param(value = "c_name") String c_name);


}