use URSTechSupport;

drop table credentials;
drop table team;
drop table ticket;

CREATE TABLE IF NOT EXISTS credentials (
   credId  INT NOT NULL AUTO_INCREMENT,
   userid VARCHAR(20) NOT NULL, 
   password VARCHAR(10) NOT NULL, 
   status VARCHAR(10) NOT NULL,
   PRIMARY KEY (credId)
);
CREATE TABLE IF NOT EXISTS team (
   teamId   INT NOT NULL AUTO_INCREMENT,
   userId VARCHAR(20) NOT NULL, 
   name VARCHAR(20) NOT NULL,
   PRIMARY KEY (teamId)
);

CREATE TABLE IF NOT EXISTS ticket (
   ticketId INT NOT NULL AUTO_INCREMENT,
   developerId INT NULL,
   description VARCHAR(100) NOT NULL,
   status VARCHAR(20) NOT NULL,
   resolution VARCHAR(100) NULL,
   startDt DATE,
   completionDt DATE,
   PRIMARY KEY (ticketId)
);

insert into credentials (userId, password, status) values ('amirza', 'am123', 'active');
insert into credentials (userId, password, status) values ('malsomali', 'ma123', 'active');
insert into credentials (userId, password, status) values ('nalghofaili', 'na123', 'active');
insert into credentials (userId, password, status) values ('aalhammad', 'aa123', 'active');

insert into team (userId, name) values ('amirza', 'Asim Asad Mirza');
insert into team (userId, name) values ('malsomali', 'Mohammad Alsomali');
insert into team (userId, name) values ('aalhammad', 'Ahmed Alhammad');
insert into team (userId, name) values ('nalghofaili', 'Najla Alghofaili');

insert 	into ticket (description, status, resolution, startDt, completionDt, developerId)
	values ('User is not able to login', 'Resolved', 'password was expired', now(), now(), 1);
insert 	into ticket (description, status, resolution, startDt, completionDt, developerId) 
	values ('Wireline interface not updating properly', 'In Progress', 'Not Resolved', now(), null, 2);
insert 	into ticket (description, status, resolution, startDt, completionDt, developerId) 
	values ('Stimulation search is not working', 'Pending', 'Waiting user response', now(), null, 3);
insert 	into ticket (description, status, resolution, startDt, completionDt, developerId) 
	values ('Data Loader crashing', 'Assigned', 'In Progress', now(), null, 2);
insert 	into ticket (description, status, resolution, startDt, completionDt, developerId) 
	values ('Not able to delete steps', 'Resolved', 'key value was not send for deletion', now(), now(), 4);


/*ALTER TABLE ticket MODIFY COLUMN status VARCHAR(15); 
alter table team rename to team
alter table ticket add column developerId int not null;*/


commit;
