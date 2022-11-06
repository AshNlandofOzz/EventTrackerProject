# EventTrackerProject

Yes poo. No one wants to talk about it but everyone does it. The reason for such an unappealing app is simple. At this stage in life, poo has ruled the world for about 5 years. Having small kids does that. The first trip to the doctor because you suspect your child hasn't been able to go is an eyeopener. Looking at my spouse asking "Well, I haven't changed a poo diaper in several days. Have you changed one?" and them look back at you and say "I thought you did." is an awful experience. Such a simple thing that would help the doctor and yet, no answer to be found. Enter BMTracker.

I find that the older I get the less I get away from this. I am at the edge of also being responsible for the care of elderly relatives and I find that when grandpa goes to the ER for stomach pain, suddenly this applies to adults. It may be gross, but it seems entirely necessary.

This application could also be used by daycares and healthcare facilities.

# Techonologies Used

This application has been designed to this point using STS workspace and also REST interactions. It uses CRUD operations(fitting) and MySQL workbench was used to initialize and house the data.

# Rest Endpoints

| CRUD Op. | HTTP Verb | URI                  | Request Body      | Response Body |
|----------|-----------|----------------------|-------------------|---------------|
| Read     | GET       | `/api/bms`           |                   | List of all bms |
| Read     | GET       | `/api/persons`       |                   | List of all people |
| Read     | GET       | `/api/bms/{id}`      |                   | Representation of one bm |
| Read     | GET       | `/api/persons/{id}`  |                   | Representation of one person |
| Create   | POST      | `/api/bms/bm`        | JSON for new bm   | JSON of created cave
| Update   | PUT       | `/api/bms/{id}`      | JSON to update bm | JSON of updated cave |
| Delete   | DELETE    | `/api/bms/{id}`      |                   |                      |
| Create   | POST      | `/api/persons/person`| JSON for new bm   | JSON of created cave |
| Update   | PUT       | `/api/persons/{id}`  | JSON to update bm | JSON of updated cave |
| Delete   | DELETE    | `/api/persons/{id}`  |                   |                      |
