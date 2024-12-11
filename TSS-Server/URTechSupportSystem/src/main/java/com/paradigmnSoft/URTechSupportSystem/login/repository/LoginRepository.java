package com.paradigmnSoft.URTechSupportSystem.login.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository	
public class LoginRepository implements ILoginRepository {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public Boolean authenticate(String userName, String password) {
		
		String sql = "select exists( select * from credentials "
					 + "where userid = ? and password = ? " 
					 + "and status = 'active')"; 
		
		Object[] sqlArgs = new Object[] {userName, password};
		
		Integer accountValid = jdbcTemplate.queryForObject(sql,  sqlArgs, Integer.class);
		
		return (accountValid == 1) ? true: false;
	}
}