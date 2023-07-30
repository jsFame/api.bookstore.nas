# <a href="https://hyperhire.notion.site/Nest-js-0726-d9b71325bc664e9db4e7e509aebc78d5"> Software Requirement Specification (SPEC) </a>

Make bookstore APIs

Reference <https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155>

### Datas on book (please makes datas after you make RDB schema)

1.title

2.writer

3.cover image

1. use this
   link(<https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg>)

4.point(price)

5.tag(can have multiple tag list are ("fiction", "non-fiction", "science", "essay")

---

Infrastructure Condition

========================

1.Should use Nest.js, RebbitMQ, Prisma.js, Postgresql

2.make the RDB schema

3.Should follow the folder structure of (controller, service, entity)

1."controller" is for the req, res

2."service" is for the business logic

3."repository" is for only sql or query stuffs (should not have business logic) o

4."entity" is for the database modeling

4.Use the RebbitMQ to save the logs (logs all the api requests on file)

Situation Condition

===================

- Will not evaluate about login process, implement the user/login process as simply as you
  can.

- When new customer is created, they get 100 point.

- Customers can buy books by only points

Required

---

- Necessary APIs

- Order

- Cancel order

- list of buy(infinite scroll)

- You can make more apis if It is nesaccery.

- Need API documentations(anything is ok. swagger, markdown. etc..)

Additional Info

===============

- Just Think normal online book store. amazon books is just reference.

- We want to know you are familar with Rebbitmq, so if you can use message queue on the
  other feature, you can do that.

[//]: # 'Provided by http://studio-d-d.com/'
