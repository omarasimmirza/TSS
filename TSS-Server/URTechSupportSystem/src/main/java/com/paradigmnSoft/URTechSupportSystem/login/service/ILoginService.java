/**
 * 
 */
package com.paradigmnSoft.URTechSupportSystem.login.service;

/**
 * @author asimasad
 *
 */

public interface ILoginService {

	public Boolean authenticateUser(String userName, String password);
	public String showLogMessage();
}
