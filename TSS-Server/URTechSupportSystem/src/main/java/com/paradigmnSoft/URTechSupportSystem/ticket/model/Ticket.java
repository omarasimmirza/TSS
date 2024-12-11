/**
 * 
 */
package com.paradigmnSoft.URTechSupportSystem.ticket.model;

import java.sql.Date;

/**
 * @author asimasad
 *
 */
public class Ticket {
	
	private int ticketId;
	private int curDeveloperId;
	private int newDeveloperId;
	private String  name;
	private String 	description;
	private String 	status;
	private String 	resolution;
	private Date 	startDt;
	private Date 	completionDt;
	

	public int getNewDeveloperId() {
		return newDeveloperId;
	}
	public void setNewDeveloperId(int newDeveloperId) {
		this.newDeveloperId = newDeveloperId;
	}
	public int getTicketId() {
		return ticketId;
	}
	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}
	public int getCurDeveloperId() {
		return curDeveloperId;
	}
	public void setDeveloperId(int curDvlprId) {
		this.curDeveloperId = curDvlprId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getResolution() {
		return resolution;
	}
	public void setResolution(String resolution) {
		this.resolution = resolution;
	}
	public Date getStartDt() {
		java.util.Date utilDate = new java.util.Date();
		java.sql.Date startDate = new java.sql.Date(utilDate.getTime());
		return this.startDt;
	}

	public void setStartDt(Date startDt) {
		this.startDt = startDt;
	}
	public Date getCompletionDt() {
		return completionDt;
	}

	public void setCompletionDt(Date completionDt) {
	    this.completionDt = completionDt;
	}
}