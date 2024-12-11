/**
 * 
 */
package com.paradigmnSoft.URTechSupportSystem.ticket.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.paradigmnSoft.URTechSupportSystem.ticket.model.Ticket;

/**
 * @author asimasad
 *
 */
@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class TicketRepository implements ITicketRepository {
	
		//Add error handling.

		private Object[] sqlArgs;

		@Autowired
		private JdbcTemplate jdbcTemplateObject;

		@Override
		public void saveTicketDB(Ticket ticket) {
			
			String SQL = "insert into ticket (Description, Status, Resolution, startDt, completionDt, developerId) "
					   + "values (?, ?, ?, ?, ?, ?)";

			this.sqlArgs = new Object[] { ticket.getDescription(),
										  "Assigned",
										  "Not resolved",
										  ticket.getStartDt(),
										  null,
										  ticket.getCurDeveloperId()};

			jdbcTemplateObject.update(SQL, this.sqlArgs);

		}
		
		@Override
		public void updateTicketDB(Ticket ticket) {
			
			//Ticket localTkt =  new Ticket();
			//localTkt.setCompletionDt(ticket.getCompletionDt());
			
			String SQL = "update ticket set"
					+ "	developerId = ?,"
					+ "	Description = ?,"
					+ " Status = ?,"
					+ " Resolution = ?,"
					+ " startDt = ?,"
					+ " completionDt = ?"
					+ " where developerId = ?"
					+ " and TicketId  = ?";
					
					
			this.sqlArgs = new Object[] { ticket.getNewDeveloperId(),
										  ticket.getDescription(),
										  ticket.getStatus(),
										  ticket.getResolution(),
										  ticket.getStartDt(),
										  ticket.getCompletionDt(),
										  ticket.getCurDeveloperId(),
										  ticket.getTicketId()};

			jdbcTemplateObject.update(SQL, this.sqlArgs);

		}

		@Override
		public Ticket getTicketDB(Integer tktId) {
			String SQL = "select * from Ticket where TicketId = " + tktId;

			@SuppressWarnings("unchecked")
			Ticket ticket = (Ticket) jdbcTemplateObject.query(SQL, BeanPropertyRowMapper.newInstance(Ticket.class));

			return ticket;
		}

		@Override
		public List<Ticket> listTicketsDB() {
			String SQL = "select a.Name, b.TicketId, b.Description, b.Resolution, b.Status, b.completionDt, b.developerId " + 
					"from team a, ticket b " + 
					"where a.TeamId  = b.developerId order by 1";

			@SuppressWarnings("unchecked")
			List<Ticket> tickets = jdbcTemplateObject.query(SQL, 
										BeanPropertyRowMapper.newInstance(Ticket.class));

			return tickets;
		}

		@Override
		public void deleteTicketDB(int ticketId) {
			String SQL = "delete from ticket where TicketId = ?";

			jdbcTemplateObject.update(SQL, new Object[] { ticketId });

			System.out.println("Deleted Record with ID = " + ticketId);

			return;
		}
}	
