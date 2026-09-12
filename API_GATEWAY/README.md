FRONTEND -- MIDDLE-END -BACKEND

- We need an intermediate layer between the client side and teh microservice
- Using this middle end, when a client sends a request, we'll be able to figure out which mi roservice should actually respond to this request 
- We can do message validation, response transformation, rate limiting 
- We try to prepare an API gateway that acts as this middle end.
- Can setup proxy servers in this as well.

