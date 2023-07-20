package com.pranitproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pranitproject.dao.CandidateDaoJpa;
import com.pranitproject.dao.UserDaoJpa;
import com.pranitproject.entity.Candidate;
import com.pranitproject.entity.IndianUser;

@Service
public class UserServiceImpl implements UserServiceInterface {

	@Autowired
	private UserDaoJpa fd;
	@Autowired
	private CandidateDaoJpa cRepo;
	
//	IndianUser IndianUser;

	@Override
	public IndianUser createProfile(IndianUser indianUser) {
		fd.save(indianUser);
		System.out.println(indianUser.getUserName());
		return indianUser;
	}

	@Override
	public void deleteProfile(String ui) {
		fd.deleteById(ui);

	}

	@Override
	public IndianUser loginUserService(String userName, String password) {

		// TODO Auto-generated method stub
		return fd.login(userName, password);
	}

	@Override
	public List<IndianUser> getAll() {
		List<IndianUser> fAll = fd.findAll();
		return fAll;
	}

	@Override
	public Boolean voting(String userName, String cName) {
		int vc = fd.voteCount(userName);
		if (vc == 0) {
//		int ucnt=vc+1;

			int cnt = cRepo.getCount(cName) + 1;

			cRepo.vote(cName, cnt);
			vc++;
			fd.uvote(userName,vc);

			return true;
		} else 
			return false;

	}

	@Override
	public int totalcountcandidate(String cName) {
		return cRepo.getCount(cName);
	}

	@Override
	public List<Candidate> getAllCandidate() {
		List<Candidate> cList = cRepo.findAll();
		return cList;
	}

}
