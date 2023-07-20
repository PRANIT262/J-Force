package com.pranitproject.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Candidate {
	@Id
	private String cName;
	private int totalVote;
	public Candidate() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Candidate(String cName, int totalVote) {
		super();
		this.cName = cName;
		this.totalVote = totalVote;
	}
	public String getcName() {
		return cName;
	}
	public void setcName(String cName) {
		this.cName = cName;
	}
	public int getTotalVote() {
		return totalVote;
	}
	public void setTotalVote(int totalVote) {
		this.totalVote = totalVote;
	}
	
}
