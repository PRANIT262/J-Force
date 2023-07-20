package com.pranitproject.service;

import java.util.List;

import com.pranitproject.entity.Candidate;
import com.pranitproject.entity.IndianUser;

public interface UserServiceInterface {

	IndianUser createProfile(IndianUser IndianUser);

	void deleteProfile(String ui);

	IndianUser loginUserService(String email, String password);

	List<IndianUser> getAll();

	Boolean voting(String userName, String cName);

	int totalcountcandidate(String cName);

	List<Candidate> getAllCandidate();


}
