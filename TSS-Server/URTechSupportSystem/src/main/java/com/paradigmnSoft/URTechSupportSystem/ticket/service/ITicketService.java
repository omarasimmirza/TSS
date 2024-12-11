package com.paradigmnSoft.URTechSupportSystem.ticket.service;

import java.util.List;

import com.paradigmnSoft.URTechSupportSystem.ticket.model.Ticket;

public interface ITicketService {
	
	public Ticket saveTicket(Ticket ticket);

	public Ticket updateTicket(Ticket ticket);

	public void deleteTicket(int tktId);
	
	public Ticket getTicketById(Integer tckId);

	public List<Ticket> getAllTickets();
	
}
