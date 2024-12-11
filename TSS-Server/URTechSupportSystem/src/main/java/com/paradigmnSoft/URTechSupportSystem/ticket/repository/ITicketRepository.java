package com.paradigmnSoft.URTechSupportSystem.ticket.repository;

import java.util.List;
import com.paradigmnSoft.URTechSupportSystem.ticket.model.Ticket;

public interface ITicketRepository {
		/**
		 * This is the method to be used to create a record in the Ticket table.
		 */
		public void saveTicketDB(Ticket ticket);
		
		
		public void updateTicketDB(Ticket ticket);

		/**
		 * This is the method to be used to list down a record from the Ticket table
		 * corresponding to a passed student id.
		 */
		public Ticket getTicketDB(Integer tktId);

		/**
		 * This is the method to be used to list down all the records from the Ticket
		 * table.
		 */
		public List<Ticket> listTicketsDB();

		/**
		 * This is the method to be used to delete a record from the Ticket table
		 * corresponding to a passed student id.
		 */
		public void deleteTicketDB(int id);
	}
