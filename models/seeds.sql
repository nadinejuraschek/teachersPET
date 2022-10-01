USE teachers_pet;

INSERT INTO Classes (className) VALUES
("Creative Writing"),
("Philosophy"),
("Composition");

INSERT INTO Students (firstName, lastName, address, contactPhone, ClassId, notes) VALUES
("Henry", "Jacobs", "jacobs@mail.com", "Jacobs, Mary", "521 Maple Rd", "555-257-9562", "2"),
("Jill", "Marks", "marks@mail.com", "Marks, Karen", "234 Oak Dr", "555-324-4213", "1", "Dyslexia"),
("Jackie", "Bronson", "bronson@mail.com", "Bronson, Tom", "809 Bronze St", "555-324-5679", "3"),
("Molly", "Heartly", "heartly@mail.com", "Heartly, Peter", "312 Eagle Drive", "3"),
('Brian', 'Stevenson', 'stevenson@mail.com', 'Stevenson, Benjamin', '432 Oak Drive', "1"),
('Jack', 'Nottingham', 'nottingham@mail.com', 'Nottingham, Helen', '726 Lake Drive', 'Peanut Allergy', '2'),
('Adam', 'Johnson', 'johnson@mail.com', 'Johnson, Brenda', '555-293-4454', '132 Henly Ave', '1'),
('Abraham', 'Montgomery', 'montgomery@mail.com', 'Montgomery, Lisa', '555-345-2718', '315 Maple Rd', 'ADHD', '2'),
('Sarah', 'Peterson', 'peterson@mail.com', 'Peterson, Oliver', '555-627-3924', '155 Oak Lane', '3')
;

INSERT INTO Assignments (assignmentName, pointsPossible, ClassId) VALUES
("Book Report", "100", "3"),
("Essay", "100", "1"),
("Argument", "50", "2"),
("Short Story", "25", "1"),
("Outline", "10", "3"),
("Research Paper", "100", "2");

INSERT INTO Lessonplans (lessonplanName, notes, ClassId) VALUES
("Week 1", "Assign outline and book report.", "3"),
("Week 1", "Go over logic symbols for argument activity and assign the research paper.", "2"),
("Week 1", "Explain essay assignment and assign short story.", "1");