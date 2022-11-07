# EventTrackerProject

Yes poo. No one wants to talk about it but everyone does it. The reason for such an unappealing app is simple. Waste and human waste issues are inescapable. This app is great for parents with young children, parents potty training, daycares, and medical facilities. The user can keep track if the person in the system had a movement and they can also log the details. Minimum required information pertains to just whether they went or not. Trying to potty train your kid or identify an intestinal issue in someone, enter BMTracker.

# Techonologies Used

This application has been designed to this point using STS workspace and also REST interactions. It uses CRUD operations(fitting) and MySQL workbench was used to initialize and house the data.

# Rest Endpoints

| CRUD Op. | HTTP Verb | URI                  | Request Body      | Response Body |
|----------|-----------|----------------------|-------------------|---------------|
| Read     | GET       | `/api/bms`           |                   | List of all bms |
| Read     | GET       | `/api/persons`       |                   | List of all people |
| Read     | GET       | `/api/bms/{id}`      |                   | Representation of one bm |
| Read     | GET       | `/api/persons/{id}`  |                   | Representation of one person |
| Create   | POST      | `/api/bms/bm`        | JSON for new bm   | JSON of created bm
| Update   | PUT       | `/api/bms/{id}`      | JSON to update bm | JSON of updated bm |
| Delete   | DELETE    | `/api/bms/{id}`      |                   |                      |
| Create   | POST      | `/api/persons/person`| JSON for new bm   | JSON of created person |
| Update   | PUT       | `/api/persons/{id}`  | JSON to update bm | JSON of updated person |
| Delete   | DELETE    | `/api/persons/{id}`  |                   |                      |
| Create   | POST      | `/api/persons/{id}/bms`| JSON for new bm |  JSON of created bm  |
# Stages
This stage of the project is backend development with a front end application coming in the next few weeks.
