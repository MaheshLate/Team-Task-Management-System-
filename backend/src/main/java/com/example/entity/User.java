package com.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User 
{
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	   @GeneratedValue(strategy = GenerationType.SEQUENCE)
	 @Column(length = 8)
	 @SequenceGenerator(
		        name = "user_seq",
		        sequenceName = "user_seq",
		        allocationSize = 1
		    )
	private Long id;
	 @Column(length = 10)
	private String name;
	
	@Column(unique = true  ,length = 20)
	private String email;
	
//	@Column(length = 50)
//	private String username;
	
	//@JsonIgnore
	 @Column(length = 10)
	private String password;
	 @Column(length = 10)
	private String role;
	
	

}
