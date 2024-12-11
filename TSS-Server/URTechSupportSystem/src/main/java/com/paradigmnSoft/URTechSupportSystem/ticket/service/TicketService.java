/**
 * 
 */
package com.paradigmnSoft.URTechSupportSystem.ticket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.paradigmnSoft.URTechSupportSystem.ticket.model.Ticket;
import com.paradigmnSoft.URTechSupportSystem.ticket.repository.ITicketRepository;

/**
 * @author asimasad
 *
 */

@RestController
public class TicketService implements ITicketService {
	

	@Autowired
	private ITicketRepository ticketRepo;
	
	
	@PostMapping(value = "/saveTicket", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Ticket saveTicket(@Validated @RequestBody Ticket ticket) {
		
		ticketRepo.saveTicketDB(ticket);
		return ticket;

	}

	@PostMapping(value = "/updateTicket", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Ticket updateTicket(@Validated @RequestBody Ticket ticket) {
		
		ticketRepo.updateTicketDB(ticket);
		return ticket;

	}

	@DeleteMapping("/deleteTicket/{tktId}")	
	public void deleteTicket(@PathVariable int tktId) {
		
		ticketRepo.deleteTicketDB(tktId);
	}
	
	public Ticket getTicketById(Integer tktId) {

		return (Ticket)ticketRepo.getTicketDB(tktId);
	}

	@GetMapping("/getAllTickets")
	public List<Ticket> getAllTickets() {
		
		// return "Get All tickers";
		return ticketRepo.listTicketsDB();
	}
}
