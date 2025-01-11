# Information and Data

People often treat the words “data” and “information” as interchangeable; they are not. You get information by combining, comparing, analyzing, or doing calculations on data. In a way, information is the output of an algorithm

**Data**: unprocessed material

**Information**: knowledge, intelligence, or a specific piece of data with a unique significance or purpose.

# Database

A database is like a fancy computer filing system: organizing and storing data. A spreadsheet is basically a database that arranges things in rows and columns for future reference. 

In computing, a database is a structured and centralized repository of data stored on a computer. This system permits the retrieval, addition, modification, and deletion of data, along with the capability to convert the retrieved data into meaningful information.

DBAs (Database Administrators) manage databases, which store data in its original form. Querying or retrieving this data results in its conversion into more valuable information.

Databases (in the context of Computer Programming and Analysis) exist in a three layer architecture in which information or data is transferred. The presentation layer (client) consists of browser related functionality that is scripted in HTML, CSS, and JavaScript. The middle layer (server) runs on PHP. Finally the database layer where information is made and data is stored.   
The database layer may function on either of two systems of data management called a relational database management system (RDBMS) or a non relational database management system. Non relational database systems are new, however, the traditional RDBMS is still foolproof and effective.

### Key Terminology:

* **RDBMS**  
  * Stands for Relational Database Management System. An old foolproof system for storing data.   
* **Non RDBMS**  
  * Any management system that is not an RDBMS. Pretty new and stores data in JSON format  
* **Data**  
  * Unprocessed material  
* **Information**  
  * knowledge, intelligence, or a specific piece of data with a unique significance or purpose.  
* **Database**  
  * a structured and centralized repository of data stored on a computer  
* **DBA**  
  * Database Administrator. They manage databases.

# Data Modeling

The initial stage of database development is data modeling, which includes gathering and analyzing the information for a business to track. Then, the developers represent this information in an Entity-Relationship Diagram to illustrate the organization of the data.

The process of data modeling starts with conducting research on the information needs of a company. The entity-relationship diagram should fully capture and precisely depict the information requirements of the organization while also supporting the business functions.

In the second step, known as the database design phase, we transform the information from the entity-relationship diagram into a table instance chart. The table instance chart provides a comprehensive list of the information design specifications, which comprise the following components:

**Table name**: the name of the table.

**Column Names**: the names of the columns.

**Keys**: a primary key (PK) is a unique identifier for each row of data; thus, making each row of data unique, and the foreign key (FK) is what links data between different tables by pointing to the PK column in the second table.

**Nulls**: show a mandatory rule for a column to have a value.

**Unique**: shows if the value in a column is unique within the table.

**Data type**: specifies the format and definition of the data in each column.

The third step involves constructing the database using Structured Query Language (SQL), which uses commands to establish the database’s physical structure. The usage of SQL extends to populating, accessing, and manipulating data within the RDBMS.

## **What is a conceptual model?**

The Data Modeling Process results in a conceptual model that is used to capture and represent the functional and informational requirements of a business. While it is based on the current needs of the business, it also allows for incorporating future needs. The primary focus of a conceptual model is to address the ideal conceptual requirements of the business, rather than the implementation aspects; the functional requirements for running the business.

Conceptual models highlight significant entities and relationships, without specifying attributes (fields) or unique identifiers (keys).

A conceptual model is crucial for businesses as it 

* precisely outlines information requirements  
* enables productive discussions  
* prevents errors and misunderstandings  
* serves as important documentation for the “ideal system”  
* provides a solid foundation for physical database design  
* documents business processes and rules  
* considers industry regulations and laws.

## What is a Logical Model?

An entity-relationship model (ERM) is a logical model that encompasses all entities and their relations. The entity-relationship model (ERM) depicts the attributes and UIDs of each entity in an ERD. In addition, it establishes whether attributes and relationships are optional or required (optionality), and also specifies their quantity (cardinality).

### What is a physical model?

The physical model serves as an extension of the logical data model and encompasses table definitions, data types, and precision. It also identifies views, indexes, and other database objects, provides implementation guidelines for these objects in a specific database, and showcases the detailed structure of all tables, including columns, primary keys, and foreign keys.

## Entities

An entity is usually:

* a noun  
* a name for a set of similar things that you can list  
* have instances (single occurrence of the entity)  
* significant importance to the business, requiring knowledge of the data

Understanding entities is valuable because they store crucial data and allow us to derive useful insights from seemingly unrelated information. In our technology-driven world, there is an abundance of facts that require organization and classification. 

Entities can take the form of three categories:

* **tangible**, like a person or a product.  
* **intangible**, like a skill level.  
* **events**, such as concerts.

## Attributes

An attribute also represents something of significance to the business. It’s a piece of singular value of information that describes, quantifies, classifies, and specifies an entity. Each attribute of an entity instance can only have one value at a time, which is a crucial characteristic. However, the attribute value can change. 

There are four types of attributes: 

1. volatile  
2. non-volatile   
3. mandatory   
4. optional

Volatile attributes are those that constantly change, whereas non-volatile attributes rarely change, if at all. Mandatory attributes must have values, while others are optional and can either have a value or be null.

The value of understanding attributes lies in their ability to offer detailed information about an entity, enabling you to distinguish between various instances and gain a more comprehensive understanding of the entity.

An attribute of an entity can only have one value (single-valued). 

* Numbers (Decimal, Integer)   
* character strings (varchar)   
* Dates (date)   
* Images    
* sounds 

There are more encompassing possibilities that limit the singular value to its specific data type or format.

### Unique Identifiers:

A Unique Identifier (UID) is a way to differentiate one instance from another, and it can be a single attribute or a combination of multiple attributes.

Understanding unique identifiers is crucial as they differentiate one entity instance from another.

### Key Terminology:

* **Table**  
* **Column**  
* **Row**  
* **Keys**  
  * **Primary Key**  
  * **Foreign Key**  
* **Nulls**  
* **Unique**  
* **Data Type**  
* **Attribute**  
  * **Volatile Attribute**  
  * **Non-volatile attribute**  
  * **Mandatory attribute**  
  * **Optional attribute**  
  * **Single-Valued**  
* **UID**  
* **Entity-Relationship Diagram**  
* **Logical Model**  
* **Conceptual Model**

## Relationships in Data Models

ERM relationships highlight their significance and importance to the business by showcasing 

1. bi-directionality,   
2. named ends,   
3. optionality  
4. Cardinality,

. There are a few different types of relationships: 

* One-to-one (typically used for roles and processes)  
* One-to-many  
* Many-to-many  
* Redundant (useless, like trying to convince someone of an opinion they don’t care about)

These relationships illustrate *cardinality*: a measure of quantity. *Cardinality* is this determination of the extent of connection between entities: Answering the question “how many?” While *optionality* determines if a relationship is optional or mandatory. 

### Modeling the Relationship

Another characteristic of relationships is *bi-directionality*; this means that relationships function in both directions  and terminate with either a “single toe” or “crow’s foot”. This bi-directional characteristic means that in one line an ERM can show two relationships: first entity to second, and second entity to first. 

#### How a relationship’s line terminates determines its cardinality. 

**Single toe**: marks a quantity of one or none, depending on the optionality on that side.

**Crow’s foot**: marks a quantity of zero or more, depending on the optionality on that side.

The line between two entities, the relationship, divides in two halves to denote the optionality of either side. Lines are marked with either a solid or dotted/dashed line.

**Solid line**: denotes a mandatory relationship meaning a relationship must have a minimum cardinality of 1

**Dashed/Dotted line**: denotes a optional relationship meaning a relationship may have a minimum cardinality of 0

All in all, relationships show how entities (or one entity and itself)

* have optionality  
* have cardinality  
* Are bi-directional   
* Are labeled

## Redundancy in relationships:

Redundancy is the term for something that is unnecessarily repetitive. The presence of another relationship in the model can lead to an unnecessary duplication in the ERD relationship. Be cautious about deeming a relationship as redundant solely based on its structure; read the relationship first. 

## How to speak ERDish

In the ancient realms of Erd, there existed a mystical language known only to the wisest. The ERDish tongue, flowing like rivers through the valleys of knowledge, was a language of harmony and precision. Spoken by the guardians of wisdom, its syllables carried the weight of centuries, each word imbued with the magic of understanding and clarity.

Most businesses use industry specific terminology in order to communicate information so does data modeling, we call it ERDish. It’s the vocabulary used to clearly communicate the business rules that are captured on an ERD by stating the relationships between entities. This sacred script follows the following syntax:

1. EACH  
2. \[Entity 1\]  
3. OPTIONALITY (must be/may be)  
4. RELATIONSHIP NAME  
5. CARDINALITY (one and only one/ one or more)  
6. \[Entity 2\]

Depending on whether on your ERD layout you typically read the first relationship from left to right or top to bottom. You need to read the relationship in the opposite direction you did before to fully understand the relationship since relationships are bi-directional.

7. EACH  
8. \[Entity 2\]  
9. OPTIONALITY (must be/may be)  
10. RELATIONSHIP NAME  
11. CARDINALITY (one and only one/ one or more)  
12. \[Entity 1\]

## Many-to-many relationships

Sometimes a many-to-many relationship needs to be ‘resolved’ to better suit the company's needs (both future and present). This completes a model by creating new entities or relationships to better define the scope of your data model–what is important to the business.

### Hiding an Attribute

Sometimes the relationship of the many-to-many model is hiding an attribute. A hidden value could be an attribute that needs to be recorded based on the two entities in the relationship ; so, to resolve that a third entity (an intersection entity) is created. An intersection entity is an entity that resolves a hidden attribute of a many-to-many relationship by dividing the many-to-many relationship to two halfs; 2 one-to-many relationships.

### Barred Relationships

Many intersection entities are not defined by their own UID, but rather the UID of both entities as a foreign key; this is called a barred relationship. A barred relationship is a relationship that participates in an entity’s UID. An Intersection entity has a composite UID of two foreign keys which directly participates in both entities UID; thus, the intersection entity has barred relationships.  

### Terminology

* Cardinality  
* Optionality  
* Relationship  
* Many-to-Many (M:M)  
* One-to-Many (1:M)  
* One-to-one (1:1)  
* Redundant  
* ERDish  
* Barred Relationship  
* Intersection Entity

## Subtypes .vs Super-Types

Sometimes it’s sensible to subdivide an entity into subtypes. In certain scenarios, a group of instances might possess distinct properties, such as specific attributes or relationships. We use the term “super-type” to describe the entity, while each group is called a ‘sub-type’.

**Super-type:** Describes the parent entity

**Sub-type:** Describes the child entity

The subtype inherits all attributes of the super-types, it also inherits all relationships of the super-type. You draw a subtype within the super-type, and typically, it possesses its own attributes or relationships; It never exists alone and may have subtypes of its own. Each subtype is equivalent to its super-type. 

Subtypes:

1. Inherit all attributes  
2. Inherit all relationships  
3. Contained in its parent’s softbox  
4. Cannot exist without a parent type  
5. May also contain subtypes

### Exhaustive .vs Mutually Exclusive

Logically, if an entity has one subtype, a second subtype must also be present. These ideas lead to two rules for subtypes: ‘exhaustive’ and ‘mutually exclusive.’

**Exhaustive**: Each super-type instance is also an instance of a subtype. You list subtypes with no omission.

**Mutually exclusive**: Every instance of the super-type is an instance of only one subtype. 

Including an ‘OTHER’ subtype is a recommended practice during conceptual modeling to ensure exhaustive subtypes—You are managing every occurrence of the super-type.

#### Know when to use it

By creating a rule that divides the instance into groups, any entity can become a subtype. The problem is not the ability to subtype; rather, it’s the reason. If the business needs to show similarities and differences between instances, then use a subtype.

### Correctly identifying subtypes.

To ensure correct identification of subtypes, use the following three questions when modeling supertypes and subtypes:

* Does this subtype belong to the super-type category?  
* Have I got it all covered? (exhaustive)  
* Does each instance fit into just one subtype? (mutually exclusive)

#### Nested subtypes

You can nest subtypes. Typically, subtypes are displayed with just two levels for readability, but there’s no rule preventing you from going beyond that.

## Structural and procedural business rules

Structural business rules describe what information needs to be stored and their interconnections—their relationships with another. 

Procedural rules address the 

* prerequisites  
* steps  
* processes  
* workflow requirements of a business

Many procedural business rules establish a relationship between time: event A must occur before event B. Diagramming structural business rules in the ERD is nearly always possible; however, an ERD can’t visually represent certain procedural business rules, so they need to be documented for future programming.

### Documenting rules

We cannot model all business rules in the process of developing a conceptual data model. Implementing some rules requires programming the processes that interact with the data.

## UID

Relational databases heavily rely on the unique identifier (UID). The ability to discern that one distinct item from the rest is determined by its value or combination of values. Any database designer must be proficient in identifying the ideal attribute or combination of attributes and relationships.The unique identifier helps you locate a specific piece of data in a database.

### Simple UIDs vs. composite UID

The term “simple UID” is used to describe a UID with only one attribute, while the term “composite” is used to refer to a UID with multiple attributes. Database designers use composite UIDs where a simple UID does not provide enough uniqueness to identify an instance of an entity. Artificial UID are abstracts that don’t occur in the natural world. People create artificial UIDs to identify instances in a system without a ‘natural’ identification.

### UID from barred relationships 

The UID can be a blend of both an attribute and a relationship. In many-to-many relationships, resolving them can lead to barred relationships between the intersection entity and the original ones. An artificial attribute can serve as the UID for an intersection entity, rather than relying on barred relations to the originating entities.

### Candidate UIDs

Occasionally, there can be multiple UIDs that are potentially valid—called candidate UIDs. Candidate UIDs are multiple attributes that could serve as an identifier where multiple UIDs could be present. The Primary UID is the selected candidate that identifies an entity; the name given to other candidate UIDs is Secondary UIDs. Using secondary UIDs can serve as an alternative method for data retrieval.

**Candidate UID**: One of several UIDs that could identify an entity

**Primary UID**: is a candidate UID that serves as the main identifier for an entity.

**The secondary UID**: a candidate UID that differs from the primary UID.

**Identification**: database vs. real world 

By using unique identifiers, we can differentiate between different instances of an entity. Later on, you’ll see that these identifiers become primary keys in the database. With a primary key, you can retrieve a specific record from a database. However, in reality, distinguishing between things can be challenging.

### Terminology

* Exhaustive  
* Mutually Exclusive  
* Subtype  
* Supertype  
* Business rule  
* Procedural Business rule  
* Structural business rule  
* Artificial UID  
* Candidate UID  
* Composite UID  
* Primary UID  
* Secondary UID  
* UID

## Normalization

Normalization is a collection of sequential rules and guidelines that are followed to reach a standard level of database design optimization; it's a multi-step process. 

Normalization:

* Collection of sequential rules  
* A guideline to reach standards  
* Multi-step process 

Normalization rules reduce redundancy by establishing relationships between tables (entities) and storing data in one spot; thus, improving integrity of our data. 

So normalization is done to:

* Reduce redundancy  
* Establish relationships  
* Resolve data management challenges


### The rules

The rules are as follows (but not limited to):

1. First normal form  
2. Second normal form  
3. Third normal form

They are the standard level of optimization for a business database. When a normalization is completed database designer’s say that the database is in that normal form.

### First Normal Form

First normal form requires that values in every cell are atomic and tables should have no repeating groups; every field in each table has only one value. No columns represent a list because no multi-valued attributes should exist.

Detecting normal form violations:

* Look at attributes and ask “are there multiple values for this attribute?”  
* Think about the values as a table; does this hold a list and/or array? 

When a violation of the first normal form occurs a database designer should create a new table/entity with a one-to-many relationship. The violating entity must/may now relate to one or more of this new entity; consequently, the new entity must/may relate to only one or none of the violating entity.

### Second Normal Form

Second normal form requires that any non-UID attribute cannot be solely dependent on part of the UID identifying that instance. An attribute must determine something about that instance that cannot be determined from a key; composite or not. Database designers need to remember that every non-UID attribute is dependent on the entirety of its entities UID.

database designers can create a new entity when violation of the second normal form occurs. The new entity contains a foreign key of the violating entity’s key (candidate or not) and the previously violating non-UID attribute. This is a barring relationship.  
Sometimes creating a new entity is not required in which case the attribute might be under the wrong entity and needs to be moved. 

### Third Normal Form

Third normal form holds that values should not be stored if they can be calculated from another non-key field. We shouldn't be able to figure out any value in a column from a field that isn’t a key.

Setting a value that isn’t based on an overall rule means that the data for that column is no longer dependent on another non-key field; it just becomes another non-key field itself. If any value can be derived from a rule it is intrinsically a violation of the 3 normal form rule.

### Terminology

* **First Normal Form (1NF)**  
* **Second Normal Form(2NF)**  
* **Third Normal Form (3NF)**  
* **Normalization**  
* **Redundancy**

### Relationship Transferability.

A relationship is transferable when an entity in a one-to-many relationship can change between multiple instances of its target entity. This functionality proves useful for relationships where an entity is assigned to a group.

### Non-Transferable.

When a relationship of a one-to-many cannot change between multiple instances of its target entity, people refer to it as “non-transferable”. On an ERD, an open diamond on the “crow’s foot” side of a relationship represents a non-transferable relationship.

### CRUD Analysis.

CRUD is an acronym for create, retrieve, update, and delete. This is the four functions that a database uses. Analysis of CRUD ensures that the schema doesn’t miss any necessary entities or relationships in a data model. It helps ensure that the data model includes nothing unneeded by business functions. This entire process is what we call validating an ERD.

To check a data model for completeness and accuracy, you need to ensure that all the CRUD functions specified by the business scenario and the business rules are represented in the ERD. CRUD functions are any performed calculations on data, modifications to data items, manipulations, etc.

#### Create.

Create focuses on keywords: input, enter, load, import, record, create. The keywords show a record is being created in the database. It’s important to review the requirements for these keywords and ensure that the data model accounts for all functions.

#### Retrieve.

Retrieve focuses on keywords: view, report, bring up, print, find, read, and look up. Those keywords show a record being retrieved from a database.

#### Update.

Keywords like: change, modify, alter, and update. Keywords that focus on updating information already present in the database.

#### Delete.

Keywords like discard, remove, trash, purge, and delete. Keywords that focus on removing information present in the database.

### Terminology

* **crud analysis**  
* **functions**  
* **non-transferable**  
* **transferable**

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnAAAADnCAIAAAARjfwmAAAkhElEQVR4Xu2d67m1KAyFdy1ThjVMHdazW5k/NmMxjhDIRrwcDKgE1/vM880WCcQEXQevnwkAAAAA2XziAgAAAACcB4IKAAAAFACCCgAAABQAggoAAAAUAIIKAAAAFACCCgAAABQAggoAAAAUAIIKAAAAFACCCgAAABQAggruoPtgpAEAGgeHOXAHEFQAQPPgMAfOMs7qODOMbvnbzwUdLX27zzh+57X91xaMw/y76wcvqLGtMwl+DKa1T9f1brVtwbc/fnqzGJpP605n/bbd9N9h/v3pvuShqWkbd93Z31QHAADygaCCc/RekD5WI4d+FqzBSJ1dnLVt1jxeS+o1Dkbt1rZEJKhzc5Mx6Turjl7/qH3XS0TUae8Vt/c+zIvkg/1hPXZuG/22pgDoxvwJCQoRBzcZuSV4J6ORLwPN7dyCZVypI4ni5LUtsiViQXXYKamddzJGUK3cRkQthFaTaZAmu2xrfoRuR22Ga8DLCQdG5cSugwzi4CYjtwSvZhz77jPLZXRxNFZHP/tbjFFry0tzTarE81dTxUwoO6PAXpKpOEVQuS8/Q90WVKqzJt63wIuJB0fFxK6DDOLgJiO3BO9k6JfD7jcdtBcpoxkqr7OVY9tli/1ihurO4gZTyS4UVOqOiDoNOtkV1HAWu5Bs78CiCLwMHhvxiorR6HOFZMZQbgnAgwz9T1DLkrlHgQbQKE4afa6QzBhKLDlzoD3iZL8PxAEc7w4fc3ebOa3RudMb21ciNuGzKQfQOZWUmiHHPoNEMmMoseTMgfaIk/0+EAdwsDsMfXiNYLTKagTV3ufmzprET2TRw2NWdL1MDqSa8UNitoKhH2zN4Lb2xfNjGziPt3wG6WTGUGKJzDUJckogDuDgEEd3ui0xsmeeyPr27sL/4oksJ4qzQs6LXiZJegd+SOzXWDBDpbX8SJiV0u0nx6ZDn0E6mTGUWCJzTVI2pwe30V5NZtdl4wA0cnCI2zoTu3u/Gy2Gd6rTBJRLuB5XsIWLU75xm8HN8CG8Nl4BzpAZQ4klMtckZXOaqWo5ZHZdNg5AI0eHuFnb+Iqp+x0L6q+yYeCHx6bVk13EOHzDW803BXX5/NgGRz6DZDJjKLFE5pokMaf8cgaqzEu0w0fPyRBD/+n9syx0WPC1TJ3gWRrzdzovfM05NHcYoZp0ti14kMafGbN/s292LYAaiUvBm/BDaXsYBHsAVVgK6nIMT8HInBedTHpV5pquaYtZdtdQ7aKtGfS5fX87r45XgDNkxlBiicw1SXpOx3H8WoUc7cHF/vltrwbNh4mtNzkE93GM/qnQiVuY/9f1X3vXpGFeGgb+i97+dT/39jV/wltbd9nJtGC7/tI7Ina6FpAehwi6wYTA+wxVw3mMV1SMRp8rJDOGEktkrkkSc2r1rx+GkV5s5P+Odie7oncNErOgsrzYv6/tC+59C5MRVydFo1FrupvR35Ex62RvmjL/H+wEmcXZ/mRB3exaQGIc1oRWmbNk8CxuBKpKokafKyQzhhJLZK5JEnP6IRW0shcLql/Lb8MnzEld+2CAmcPNqmhOAQ/cwqw9ND392HNibqJp1rpXL3XuVLA70+Uc8Lc7OkHd6VpAYhzWGFf5ezeW34zVbpTdFvOHgtP+oac/EbhWWCdoBtxNmBEt5PjMtp/OP5bDV2LmEj+mw2pU0nV9MODH3pf39ntP4eNAWqDti0uTkVhyVOMVQDPX5TScoe7Bg+o6NxIp4YAT+3CLgj8+TDn/G1wbMzrKdcCDcELiFRWT43N4gcK1QH/tWeynmcyoDBv3JT1fxDF/NgcD21UT+fMg4hgSEsuczIFquS6nAkEl4kq3IO6a59CTv74b3ZnJYjl+u8Gfo46OOBDUGjgYgeN34/J4NMIfSeKBz3/Cm+Q+SjEtBDU8/8T1aOXH3m5IZebUi/29PlWjCHEMCYllTuZAtTybUx5UEXG96xH3G97/TKe4ozszg+OsmcK638vX9D9yLAYRnJF4xUo7NwsfSeKBz3/CtnwudymoRjgX1fzoNeWDFU/7b/DXobtvUd3FC9q6uDQZiSXHNF4BNPNsTqNBxYth4T3c3yOojYOBx+VhnejBMCeoy6vjgcn2cy+ZRH2dwmtn8BqmUFD9LfRh43zPIM1f+ZE2XkXQqRpFiGNISCxzMgeq5dmcbg4qLlyvuo47+wJ1cjDkwskoP/oVPRhGghpO16wgmfvs+Aaf4hz4/Cc/7bTXS+mHKxx/Z1OCxmmLSFDpTIz7QdXce4ztjYfeRAfiGBISS584iS2olmdzejCoeNVehbLc0wuomYPB5gV18ehX9GAYC2qA0Rt+JOwKVeWe4hUJhGd3e3ofRXiXr1/FXfAkm7aLbtufgr8h6C7f0FYLtHlxaTISSw5qvAJo5tmc/jmouMJBnSLc0AWonIOR5iajpCH+0S+jPsGDYSSo8790a87oKrsTp3P5FXfsHPgM0smMocQSmWuSZ3OaMqi4zp81c7i0caCCwzHmRNS8jKTrSF/tDNWcGu16c76Ub0qiN5ZQobE0lxpnVb1ATv/wGaSSGUOJJTLXJAc55YzfQNz3irP1z3JRs0AR142u69Doc4VkxlBiicw1yV5OOd33EHe/j9jwmLKtAY0UH1Q3oNHnCsmMocQSmWuSvZxWnm52r5STpdoBeik4nNZc1PhFzb6NzBhKLM9mjuunm+Sw+HSgvREgdOBj36tKt7C5OnaBfoR3u70NCk5cej7d98MeFvGzSCNANaXG0ibceNkuijf4TjJjKLE8m7lfzaH/8zO5+awFlX6Gry8xtxJ8/XucP/4LmhDUrZyeTfdTsJ+Z3maagwbIH0UHcOMhcaXzFGzqzWTGUGJ5NnNcs3dvzRg/9imlMWhqCISQ6tOrN7gCreJHu2x7YTu/l48kCuo8TaXf/ApKCKoP7Eb55qoKYW/FPosNQTPkjJ8/4Za5Fy7JoVQ7LyczhhLLs5nj+p/fh7foAwV8/ziVbH1NOvzc9E8d6T0dv69VhyxeqfqxZ3gtK0Gd4ldQQlC3csqBjFdUDPss8FxgAhpDNnISiVrmvqLys+S3AKZVds4isTybuaAmfbXAfbtglr6gDn3zcvk16Wn5ueng3Zj8DklugUmeoZq5afgKSgjqZyunHPF4RfWw56ecP1sftIdg2KSz2TL3uLk2hRxbwGTGUGJ5NnNc07xBhGaWXgg7q2Duu9P03Z/wa9Ish+5z0yOVuzePZAtq9ApKCOpmTs+muyrY+fRNSK8JWuXUgDnLQcvc70GdPWRWICIzhhLL92Tu+juoKmIvp22km7fiz235swJonvU44ZJSBL3FpNcMOVsfbJIZQ4nlWzI3bFygbZi9nLaRbt6KP7flzwqgedbjhEtKEfS2jbh+vAKcITOGEktkrkn2cqo93ex/4lYkVgMNsx4t65J74H7/7D2lDviTzBhKLJG5JtnLqep0s/Pp/p+qDJpkPWbWJXfCvR/4cLz2mKBtZ95tPUDxN8E9K3v3uNhOcj+xTnfWbLafSRgEARLLKPRXwx2Ng7nLt7OfSQLF2cvpzekuBbt91vmz9UF7rIfNuuR+2IdNT/bKUwhE0Cni5hOJf7MQ1E3KqOBxHzmIY0hILHMyJ8B1ZJ6Zsbf42odnojogn72c3pzufNhhmdsyqw3o/ZYOO3SD+8/5xvKgziWfyQQCOCMHJY/Abqyd2SxMZLb6Bh+Vc0/y9/Ybrg6jr/YpjOUTjO4pDL/Yuec1LP4hSc/ETi5atq8E8C2bd9j5fYLcoH2GK8+LVM7aHLx2wDjJC7K38pFtXJqMxJI9jlfsYZ8l9fkaaftp0Tww89ek03X07mdabmAvpz7bG6tqg13NcTjHdkFwUxs9srUpqMGoLvPHO8hnPYTWJQ/CzoQuRYtnGYfBvnfOPVtI4kSP6U92AJPs0Wh1o9eWhIvmD8QNQQ1f4+MGee87ogrcMn1fdvr19dspBvLQLgarBq5AJtydbG/KieF0i6Cav1D8v7840iJt83j4jl/uyH2t91B9gZi9nJ5M9zOwk/mu5rfggKCqZT2Q1iXPwv6wS9HiGcIvnjv9Wzyg74cuP8ofTArdA/3e3L7tzrF8jc80hoIamExGJH3L9IaA6ffaAK+aRnUH856fSFCDnYp+cneyvUkaQ4fEkkMZr9hk8Z4Fs0S2c3SmX1PdrpwGgupx2gzKspdTn6ONVZXAHhbxs0gjhsXpXHN4il6KuarjDiXgcTgjByVPwZ5E/qxL0uEjsBmh7hqquUgxD0+narZZlr1QWalaZ4/nZnynCaoxsTXprT5/CKqf+JoplTW3kuKa+vzeaGucaV1Q/XZS6Od/Ka5zvMxfE+4UPL0IaUFHp4V5lTn02KzbE8hRZZDPXk453fcQd7+P2PCYYq2tnmP+a4YKamE9qNYl98M+bHqyVw5OkRlDieXpzG1dQ+3t8kAXoDunpktZpavZv8nrPN83tt3RdBaI2cspld9G3P0WApN0irUJQVXLemitS+6Eez/w4XgtSCQzhhLL6zLXy+7VBiW4KKeJJA4qrpZSWcZ1LQMtrAfYuuQeuN8/e0+pA/4kM4YSS2SuSZ7Nacqg4jrH1TK5un1QP+thxiWlCHrbRlw/XgHOkBlDiSUy1yTP5vR4UPHagzqluKELUDnrkcYlpQh6i0mvGXK2fgDd1nIC/2gKIbz9p06kMXRILDMyB+rl2ZzuDSou31x7Bbd1BKplc7xxYRHClkMSq60RmKSweYkfgrqHxPKizIFneTan60HFJVH51dzcHaiQS0fdXsvc6V6FY8SGNEM1j6nYtxf1wVOO9JyXqeGe73I3hM61zIJ7JYAXVHvzKd9YmvLSngqRxtAhsaQuc3oFFfJsTsNBxb+55E4e6RRUxaVjb90yd7delU6GuRNU/wTqogU7Qx3clHRWXP/opym1j5CyoH7886D0fCkVHr+0p0KkMXRILDMyB+rl2ZzyoIqI613PU/2Cerh0+IUtc0dhoYyMRvwM1S7wD4JO+f7eSOK008077XzUvbGIq7C+0oImOc3e/SWWPlISW1Atz+aUB9WzbkxPxwHUwKXjkBsPiSudJ6OpI0E108vVi4qol+UMdfydEO7tu+/3X9pTM9IYOiSWGZkD9fJsTusZVJW4AR7k0tHIjZftIqPBI0H92BO59nqoeRsPqaO7htovX/LnrqE6B6KX9mhBGkOHxJK6zOkVVAhySiAO4NJD3EWNX9Ts28iMocQSmWsS5JRAHIDGQ5xGnyskM4YSS2SuSZBTAnEAGg9xGn2ukMwYSiyRuSZBTgnEAWg8xGn0uUIyYyixROaaBDklEAeg8RCn0ecKyYyhxBKZaxLklEAcgMZDnEafKyQzhhJLZK5JkFMCcQAaD3Eafa6QzBhKLJG5JkFOCcQBaDzEafS5QjJjKLFE5poEOSUQB6DxEKfR5wrJjKHEEplrEuSUQByAxkOcRp8rJDOGEktkrkmQUwJxABoPcRp9rpDMGEoskbkmQU4JxAFoPMRp9LlCMmMosUTmmgQ5JRAHoPEQp9HnCsmMocQSmWsS5JRAHIDGQ5xGnyskM4YSy2KZG9xXalMYv/R5PXAVZXKqH8QBFDvE3YhGnyskM4YSy2KZOyOoQ/+BoF5KmZzqB3EAxQ5xN6LR5wrJjKHEsljmloLafz6D/bJtbz9pO7f/NcsjdcSC2tmZqv9YfFANM9g8yuRUP4gDcAc4VcNAo88VkhlDiWWxzEUz1PHLLVtBdWvHb/cdvaCO9I14A387PlwEYsrkVD+IA+ADUbyiYjT6XCGZMZRYFsvcUlC5QT9DdQL57YyU+hkqTWInO3M15lyNlRXIKJNT/SAOoNgh7kY0+lwhmTGUWBbL3CySnn4wOsoMVil55WTnqR/bI9f5WmnlajjhmwmFMS59H4gDoDGgaxho9LlCMmMosbwnc4kzzsRq4E9uyKkKEAdwzyGuLBp9jvjnv3/pv3jFjWTGUGJ5T+YSlTKxGviTG3KqAsQB3HOIK4tGn0NYTSGooAWQUwJxABoPcRp9ZipR0yl795dYqs4c2AM5JVqNQ5MbdREaD3EafSYqkVIiM4YSS72ZAwcgp0STccA+ewqN4dLo81SZmk7Zu7/EUmnmwDHIKfFIHC7dpy5tvEk0Rkydz/Wc5g3JjKHEUl3mQArIKfFUHC7arS5qtm00Bk2Xz3Wq6ZS9+0ssdWUOJIKcEg/GofieVbzBl6Axbop8rlZNp+zdX2KpKHMgHeSUeDYOBXcubqpIa69CY9y0+FytlBKZMZRYaskcOAVySjwbB9658n0o1c4L0Ri6+n2ueWLKZMZQYll/5oAA5JR4PA68f+W4kd/Cm9EYvfp9rl9Np+zdX2JZf+aAAOSUqCEOvIvJPMmxBZPOANbss4q5KZEZQ4llzZkDYpBTopI48F4mcEZmBRhx5B+kWp8VqemUve9ILKvNHMgBOSWqioNgXxOYgAiNMazTZ11qOmXv/hLLOjMHMkFOidricGp3O1UZ7KExjCk+3yls6qSU+DOGx0gsUzL3ZpQGR6nbxakwDuTSn14lVgN/ojGSKT7fJm9K1XTK3v0llimZey16g6PU7eLUGYc/x9WfFUA6GoOZ4vM9IqdXTafs3V9imZK5d8KR0RgcpW4Xp9o4HAytg1VAgMZ4pvh8g86pVtMpe/eXWKZk7oVwWJRGRq/nZak5DpsDjAujciBGYzwTfb5U6lRLKZESwwMklomZexvaw6La+YJUHof1MFuXgEw0hjTR5+sErwE1nbJ3f4llYuZeRQMx0e5/KeqPQzjYwt+gFBqjmujzRbJ3UbP3kxLDAySWiZl7D20EpIFNKIKKOPCQU+GtOjQGNtHn4srHDRZs80FSYniAxDIxcy+hmWi0sRX5aIlDMwOvQjTGNt3nguLXmJpO2bu/xDI9c23DcWgjFM1sSCYq4vAbeZ64BshAY1TTfS4ige1JKZEYwz0klumZu5ObXeIg3NnppbS0LTmoiMNv8AXElYAUjSFN97mIEBZppEISY7iHxDI9c3fCXt3g2G0d3Ul7WySj/jhEw48XuQRkojGep3zO0cJW56ZEegw3kVieytxtsFdX+3ZDF4/Q5EYJqDwOm8OPC6NyIENjME/5LFbEttV0yt79JZanMncz7NtFHl7X8uO0ul1nqTkOB8OPV22uBafQGMlTPstEsXk1nbJ3f4nlqcw9AntY1s/iDVZFw5t2imrjwMNvz70/K4BENIbxrM9ndfENajpl7/4Sy7OZewr2s4i3pdqplra3Lp1q45AyArnOcTVwjMYYnvX5lDq+RE2n7N1fYnk2c8/C3uY4nN9C/TS/gYnUGYf0EZheE+yhMYZnfU4UyPdIKXEqhmsklmcz9zjssMztHFtFNL+BidQZh1NeUeX0+iBCYwDP+pwok4nVmuFUDNdILM9mrh7Y83T/T1VWzUs2809qi4N4BIoNgcbQCXw+Fsvjta1yNoYREktB5qqC/f9zExKrtcF7tvSY2uIg9ocMxeZvRmPcBD4fSObBqrY5G8MIiaUgc7XBm3CwIcdr2+NVG3tAS3HgMdzMFt2DxqAJfN5Tzb3yN3A2hhESS0Hm6oQ3ZL05m4Vt87bt3aOxOPBIbmmjrkZjxGQ+R8LJUvpONZ2yd3+JpSxz1cKbwxsV/n4PL9zkTdqLA4/nxrbrOjSGS+ZzqJ1Q0yl795dYyjJXM7xFIXGl1nnnVq9pNQ6vHdgCNMZK5jPLJ9SUEMQwRGIpy1z98HY1uXV/8s6tXtNwHF47ts+iMVBin0MpfbmaTtm7v8RSnLnK4e0KiSu1y9u2d4+24/DCgS1AY5TEPkNKQ2QxZCSW4sxVC28Rb1RYEpY3zEs280+aj8N7hrQYjSES+ww1DZHFkJFYijNXJ7w56y0KV21WaInmNzCRN8ThDeM5B43x0ehzhWTGUGLZUuZ4Ww42J6xzUE07bW9dOi+Jwxu2UYzGnV2jzxWSGUOJZTOZ4w1J2Zawckp9dbS6XWdBHIDG3VyjzxWSGUOJZTOZE2wIm5w1rJ/2tkgG4gA07uAafa6QzBhKLNvInHgr2FBmXi2NbY4YxAFo3Ls1+lwhmTGUWDaQufxN4BYy26mHZjYkE8QBaNyvNfpcIZkxlFhqz1xB/7mpUg0+SAObUATEAWjcozX6XCGZMZRYqs7cFc5zm8VbvhPVzhcEcQAa92WNPldIZgwllkozx25f5HnY/kVdXIpSt4uDOACNe7FGnyskM4YSS42ZY5+vdjvs6Oq+yqLO4YtAHIDe/VeXzxWSGUOJpbrM3e8w93hnp5no8vY6EAegbueddPpcIZkxlFjqytyD3nLXj/R+Fi1+Xg3iABTttoxGnyskM4YSS0WZe9xVduBZN1Ko38N7QByAih02QqPPFZIZQ4mllszV42c9nhxQv4f3gDgAFTtshEafKyQzhhJLFZljJyv3sx4QKwJxABoPHRp9rpDMGEosVWROhZNVgXARiAPQePTQ6HOFZMZQYonMNQlySiAOQOMhTqPPFZIZQ4klMtckyCmBOACNhziNPldIZgwllshckyCnBOIALjrEFW8w5CKf30ZmDCWWyFyTPJjTp/rd5ME4gEooe4jj1ko1uMkNXbyBzBhKLJvJ3PjtPp+OFz79sFht6T59sDSOwcIZxk/3jct2GL+mx9m1sK9o8QruzykPpPu7PqAqZ8AjlBqT3E6pBg+4oYs3kBlDiWUzmZsFte87J6M7gvopI6gnGHoT2BsUNOLOnPIQCokrPURVzoBHyB+T3EJEXK8cN3TxBjJjKLFsJnOzoH5Hszm0QILa+a0brKoZfkJrBXWu6aHScHE2MUbd19man6OfoY5c0xQG7dg6rguz3A+zee9boGbHoKNf9XJwX5fCm7AmrvoQVTkDHiFnTLJt1Ej4+wqi7oCMzBhKLJvJHAmqEbZZ7ZygDv7c7Ehz0/UMtftt+MhaOwzDHJDRKh8V8Q8npU5QqTXTy6+doQ8E9TdDpbLeN2sFtZs74ppluTSnPGZColVLi8eoyhnwCLIxyVabttFaMVGzzJ8VQAqZMZRYNpM5J6hWtAYSVC6y6mX/3RDUgN6o4/y/7xAq3xT8WAgqq3Vnpqe+1V+n0+qUL/2gf8fR9GVIviKbDjUcl2bjHF6yWSEsfJCqnAGPcGpMcuVjq7hSHnHrJ30Ge2TGUGLZTOZCITPbY6ebH6uL86TRL/q7lqwFaVtvzcZZ+uY69K83TBfUuUL3dSeZEwXVTYiNrIZelaF4TnmcMHENy/Ha+6nKGfAIiWOSq4nri4mbTvYZHJMZQ4klMleY5Qz1KYrklMcGE9dYERtcQNzlIQIT0BjHI4fXHle7goMeD1aBdDJjKLFE5opgzhHXFMlMT34b44lr7BNblibu7xCBCWiMvZHD5Ztrb+Cg64NVIJ3MGEoskbkmEeeUxwMT13gOgT8CE9AY0UjmxZClxU0c9H6wCqSTGUOJJTLXJGdzysMgJK70NAKvBCagMaLxzItc8hQHbhysAulkxlBiicw1SXpOeQAwcY1qELgnMAGNEQ1sXozK7+fAgYNVIJ3MGEoskbkmSckpp56Ja1SGwEmBCWiMzeHNhZtr7+Gg64NVIJ3MGEoskbkmOc4pJ52Ja1SJwFWBCWiM40HOa4+rXcFBjwerQDqZMZRYInNNcpxTTjoT16gSgasCE9AYKYOc66RUJmKDDOKm03wGf5IZQ4klMtckKTnl1DNxjcoQOCkwAY2RPry55p8mcb084tbP+AwOyIyhxBKZa5JTOeUxwMQ16kDgm8AENIZgVLPJnu1mYUH2+gWnyIyhxBKZaxJBTnkkhMSVHkXgksAENEbOYGbbqJHw9xVE3QEZmTGUWCJzTZKTUx4STFzjIQTOCExAY+QPY24hIq5Xjhu6eAOZMZRYInNNkp9THhhMXGOL2OYC4i4PEZiAxpCNnDXcTqkGD7ihizeQGUOJJTLXJKVyysMjJK4UEFe9gLjLQwQmoDFkI2cPbq1Ug5vc0MUbyIyhxBKZa5LiOeVxwsQ1LMdr76cqZ8AjXDQmizcYcpHPbyMzhhJLZK5JLsopjxZmr0JU/hRVOQMeobYxmYJGnyskM4YSS2SuSS7NKY8ZZr0qqP4kVTkDHqG2MZmCRp8rJDOGEktkrknuySkPnjVx1YeoyhnwCLWNyRQ0+lwhmTGUWCJzTXJzTnkUMXGNh6jKGfAItY3JFDT6XCGZMZRYInNN8khOeSzd3/UeVTkDHqG2MZmCRp8rJDOGEktkrkmQUwJxABoPcRp9rpDMGEoskbkmQU4JxAFoPMRp9LlCMmMoseTMgfaIk/0+4oiAFxMPjorR6HOFZMZQYsmZA+0RJ/t9xBEBLyYeHBWj0ecKyYyhxJIzB9ojTvb7iCMCXkw8OCpGo88VkhlDuSUAAIBKYEEF+cTBTUZueTVDXGDoPv00jZ/uG68AAIAXE2sCyCAObjJyy5DPpx/6rut6uzTOS7NPwzj/ND8+n46qzXXMgqvm1vZfkk4jk7R+XviaH8a3ceiphfFX6AV1HGyB7Wj2ITAHAAAAbqaUoH6+w2j0sh+M4HmFn39YsRtN8TSQEJp6X1NM1eYlu9ZYGQn+UiM0Q50V16rv+CVbu+gElRundiJzAAAA4E5KCaqbdNoJIs8gv3YCafESSAtGCOO1fCLX/SBVpDmorxMI6qycVpVtS+ZnZA4AAADcSSlBpROtYziDDDUvZBy+pn68dktQh97PNt3sNmjflUz2VPBgT/mG5gAAAMCdFBNUmkZa+ftJGs8vSTr9krnkulobC+rHnMilS7DOxhe6Cr/Jq5VzCCoAAIAHKSWo/j4jAAAA4JVAUAEAAIAClBFUAAAA4OVAUAEA4C387jzxd59EjN+N5w6Hnu6PAX9QRFBxHxAAACjgs3gN0ODuD7V3eNp37JjH+qkOvVSHXrxjBdWs4tfyBCambviOHX6fz8YzHq0DQQUAgLdAYhkszgI5kBD29t04fjLqXqrDhbTo396zMKF/bWu/d+yQNtviF1Fkg38PuhCTDTGt4xDzKlvf/EHzwr9fAADgQfxBmIgP3YGg/p5LDAttZfuYYrDWvJ/OQhNWXkVrX0VJQR3H8dubv2RMEN07GewphZHnr+Y1v/YvF9wVDAAAd/MJBHWWSTvbdEfjxQzVv1SHC/nFdObovTRxjOM8fZ2rbb7P5yUUFNShm1MwjMH0v3e5Cd8yiM/FgOaY/0BfHELmAR/e2OEWj4Z93AIA1xAcij/+pqTf+3PMMLXTzajQSC99psS9vSdey0yrV+68inKCOvTmiGAvR9OhYc5L58/x9vQyJPcX0dGRBQD1QFABeCXlBJX+9um638mB4LDivqzW4+2AQDfz0KW/vfvhdz+kk0M+E9O5Tx4tF+NXZobNUgt8LcqeNHN3YNLJt99f/baQ/lrFfgRAVRQR1G3wRzdoj+V3IMyP0Q91fz7GX5viWwfCEzO/vzLpfgIH7yzDMJg79vxfqJO/v+/3t2nnJDyYAgMAquBCQQWgPVhH/ezwtKBu3rJBLfhpq/+SknnG3j8puLTCX6sAVAgEFYATHAgqn/LtelJQd8rXL8anfEOJpBaCezvcXZQfdw9IfKMHBBWACoGgAlAvn+WlVgBAzWB3BaBOzA3zm+eHAQB1AkEFAAAACgBBBQAAAAoAQQUAAAAKAEEFAAAACgBBBQAAAAoAQQUAAAAKAEEFAAAACgBBBQAAAApwlaCOg3sN2+De+f17q5r/5ozhaz9Iy4TvhQlfHe4ZuIw+X0MfiGfwWhkAAABPcYkCGfXs3CtPO3pnqf/+u13rPm41GQns+bWldvH3RapIUEmhqWz8dp39RR+IJ+jLVz8DAAAA4EYuUaDlh9rHYRxDQZ2sjtKPubD3HyS35V3v3wa+FNTBTEaXjUz2ZeJcMK+CoAIAAHiKKxTIfxh5UfbTwm/fuTeU0vetgu+QkxK7fw8bmenMdyP9VyR7syEQVAAAkBFfp6NThpbwOp35blIwZQqPur8vGP74XafbWnSf+22GKzaGv2wVsLiG6iIafKzKuUF5Gr+myp+CarHfefbfmOR2AAAApLNxnS44oobX6cznfe0EhrDHdHfAjwQ1vE63Xpz8Rwl/y/q5ZGO64CyumYDO4d7TQov7ALMXVPtjGXjCNxKcJR7meiNdPnWEZ5sBAAD8zcZ1uuUUJfxG73zg3bxOtxTU+DpdvPjpxuZmQVdtzOinpJSYtaCGlz8nH9bFmYR9QZ1wly8AABRj6zodTWw8tHo+rvvJK+urOWjTJGrjlG905F8JQWMH7aY2BgAAgIDo3J6/nSUWiFBiaZLqDc3JQghqUxsDAABAQHQN1V+DWwpEcAMp/2YlppOSvqoHggoAAOBtxNfpVmr393W6tTpCUAEAAABwFggqAAAAUAAIKgAAAFAACCoAAABQAAgqAAAAUAAIKgAAAFAACCoAAABQAAgqAAAAUAAIKgAAAFAACCoAAABQAAgqAAAAUAAIKgAAAFAACCoAAABQAAgqAAAAUID/AalUCMxeJhw3AAAAAElFTkSuQmCC>