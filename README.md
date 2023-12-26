# Project: blog-by-ugo
Blog REST APIs - (Authentication and Blogs)
# 📁 Collection: /api/auth 


## End-point: signup
Sign Up To Start Creating Blogs
### Method: POST
>```
>undefined
>```
### Body (**raw**)

```json
{
    "username": "janedoe",
    "email": "janedoe@gmail.com",
    "password": "janedoe"
}
```

### Response: 201
```json
{
    "username": "kanedoe",
    "email": "kanedoe@gmail.com",
    "createdAt": "2023-12-22T12:42:51.586Z",
    "_id": "6585844b9cc6364a3421aa5d"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login
### Method: POST
>```
>undefined
>```
### Body (**raw**)

```json
{
    "email": "johndoe@gmail.com",
    "password": "johndoe"
}
```

### Response: 200
```json
{
    "username": "kanedoe",
    "email": "kanedoe@gmail.com",
    "createdAt": "2023-12-22T12:42:51.586Z",
    "_id": "6585844b9cc6364a3421aa5d"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Profile
### Method: GET
>```
>undefined
>```
### Response: 200
```json
{
    "username": "kanedoe",
    "email": "kanedoe@gmail.com",
    "createdAt": "2023-12-22T12:42:51.586Z",
    "_id": "6585844b9cc6364a3421aa5d"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: /api/blogs 


## End-point: Post New Blog
Add A New Blog Post To Blogs Collection
### Method: POST
>```
>undefined
>```
### Body (**raw**)

```json
{
    "title":"Zen and the Art of Mountain Biking 4",
    "description": "Cycling is meditation in motion. 4",
    "para1":  "We mountain bikers tend to get a bad rap.I for one, when I mention my love of mountain biking, am often met with looks of disgust and disappointment. Trail runners don’t like us. Roadies hate us. Hikers despise us. Even internet search algorithms seem to have a bias against us mountain bikers. During the coronavirus pandemic, when I began to wonder why brake pads had become scarce commodities, I typed the words why are mountain bike… into an internet search bar. Why are mountain bike brake pads so hard to find? I intended to inquire. But the search bar auto-filled: …rs such douchebags.",
    "para2":"Why are mountain bikers such douchebags? Perhaps it’s a question you’ve considered yourself. You mountain bikers are crazy,” a friend of mine by the name of Alyssa once declared in response to my long-winded, wild-eyed ramblings on about the beauty and allure of mountain biking — the poetry of cycling, if you will. Her eyes were narrowed with incredulous skepticism. After one too many near run-ins with mountain bikers on her local trails in Boulder, Colorado, she’s begun to view mountain bikes and the “adrenaline junkies” who ride them with disdain. She hikes. She runs trails. She even road bikes. But when it comes to mountain biking, she just doesn’t get it. And she has a point, as much as I hate to admit it, the avid mountain biker that I am. ",
    "para3":  "If, on several occasions, I’d nearly been run over by some asshole hauling ass down trail, I’d probably be a little resentful, too. But you’re always going to have a few bad apples, I tell her. You can’t write all of us off because of a few reckless riders. Alyssa’s contempt for mountain biking runs deeper than her hatred for reckless riders, however. She shakes her head, searching for words sufficient to articulate her antipathy toward us mountain bikers. What sane person pedals a bike dozens of miles and thousands of feet up a mountain, only to ride back down?” she asks me after a moment of reflection. “And who calls that fun? Alright. Maybe we mountain bikers are a little crazy, I concede. ",
    "authorId": "658477b692b118ba6c8acf64"
}
```

### Response: undefined
```json
{
    "title": "Zen and the Art of Mountain Biking 4",
    "description": "Cycling is meditation in motion. 4",
    "para1": "We mountain bikers tend to get a bad rap.I for one, when I mention my love of mountain biking, am often met with looks of disgust and disappointment. Trail runners don’t like us. Roadies hate us. Hikers despise us. Even internet search algorithms seem to have a bias against us mountain bikers. During the coronavirus pandemic, when I began to wonder why brake pads had become scarce commodities, I typed the words why are mountain bike… into an internet search bar. Why are mountain bike brake pads so hard to find? I intended to inquire. But the search bar auto-filled: …rs such douchebags.",
    "para2": "Why are mountain bikers such douchebags? Perhaps it’s a question you’ve considered yourself. You mountain bikers are crazy,” a friend of mine by the name of Alyssa once declared in response to my long-winded, wild-eyed ramblings on about the beauty and allure of mountain biking — the poetry of cycling, if you will. Her eyes were narrowed with incredulous skepticism. After one too many near run-ins with mountain bikers on her local trails in Boulder, Colorado, she’s begun to view mountain bikes and the “adrenaline junkies” who ride them with disdain. She hikes. She runs trails. She even road bikes. But when it comes to mountain biking, she just doesn’t get it. And she has a point, as much as I hate to admit it, the avid mountain biker that I am. ",
    "para3": "If, on several occasions, I’d nearly been run over by some asshole hauling ass down trail, I’d probably be a little resentful, too. But you’re always going to have a few bad apples, I tell her. You can’t write all of us off because of a few reckless riders. Alyssa’s contempt for mountain biking runs deeper than her hatred for reckless riders, however. She shakes her head, searching for words sufficient to articulate her antipathy toward us mountain bikers. What sane person pedals a bike dozens of miles and thousands of feet up a mountain, only to ride back down?” she asks me after a moment of reflection. “And who calls that fun? Alright. Maybe we mountain bikers are a little crazy, I concede. ",
    "comments": [],
    "likes": [],
    "authorId": "658477b692b118ba6c8acf64",
    "_id": "658581ba9cc6364a3421aa4f",
    "createdAt": "2023-12-22T12:31:54.453Z",
    "updatedAt": "2023-12-22T12:31:54.453Z",
    "__v": 0,
    "email": "johndoe@gmail.com",
    "username": "johndoe"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update A Blog
### Method: PATCH
>```
>undefined
>```
### Body (**raw**)

```json
{
 
  "title": "Zen and the Art of Biking",
  "description": "Cycling is meditation",
  "para1": "We ",
  "para2": "Why are mountain bikers such douchebags? Perhaps it’s a ",
  "para3": "If, on several occasions, I’d nearly been run over by some asshole hauling ass down trail, I’d probably be a little resentful, too. But you’re always going to have a few bad apples, I tell her. You can’t write all of us off because of a few reckless riders. ",

  "__v": 0,
  "username": "janedoe",
  "email": "janedoe@gmail.com"
}
```

### Response: 200
```json
{
    "_id": "65847d51a1c340a63dde442e",
    "title": "Zen and the Art of Biking",
    "description": "Cycling is meditation",
    "para1": "We ",
    "para2": "Why are mountain bikers such douchebags? Perhaps it’s a ",
    "para3": "If, on several occasions, I’d nearly been run over by some asshole hauling ass down trail, I’d probably be a little resentful, too. But you’re always going to have a few bad apples, I tell her. You can’t write all of us off because of a few reckless riders. ",
    "author": "johndoe",
    "comments": [],
    "likes": [],
    "authorId": "65804e538dd0c3601687a742",
    "createdAt": "2023-12-21T18:00:49.515Z",
    "updatedAt": "2023-12-22T12:33:49.669Z",
    "__v": 0,
    "username": "johndoe",
    "email": "johndoe@gmail.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Blogs
### Method: GET
>```
>undefined
>```
### Response: undefined
```json
[
    {
        "_id": "65847de5a1c340a63dde4431",
        "title": "Zen and the Art of Mountain Biking 2",
        "description": "Cycling is meditation in motion. 2",
        "para1": "We mountain bikers tend to get a bad rap.I for one, when I mention my love of mountain biking, am often met with looks of disgust and disappointment. Trail runners don’t like us. Roadies hate us. Hikers despise us. Even internet search algorithms seem to have a bias against us mountain bikers. During the coronavirus pandemic, when I began to wonder why brake pads had become scarce commodities, I typed the words why are mountain bike… into an internet search bar. Why are mountain bike brake pads so hard to find? I intended to inquire. But the search bar auto-filled: …rs such douchebags.",
        "para2": "Why are mountain bikers such douchebags? Perhaps it’s a question you’ve considered yourself. You mountain bikers are crazy,” a friend of mine by the name of Alyssa once declared in response to my long-winded, wild-eyed ramblings on about the beauty and allure of mountain biking — the poetry of cycling, if you will. Her eyes were narrowed with incredulous skepticism. After one too many near run-ins with mountain bikers on her local trails in Boulder, Colorado, she’s begun to view mountain bikes and the “adrenaline junkies” who ride them with disdain. She hikes. She runs trails. She even road bikes. But when it comes to mountain biking, she just doesn’t get it. And she has a point, as much as I hate to admit it, the avid mountain biker that I am. ",
        "para3": "If, on several occasions, I’d nearly been run over by some asshole hauling ass down trail, I’d probably be a little resentful, too. But you’re always going to have a few bad apples, I tell her. You can’t write all of us off because of a few reckless riders. Alyssa’s contempt for mountain biking runs deeper than her hatred for reckless riders, however. She shakes her head, searching for words sufficient to articulate her antipathy toward us mountain bikers. What sane person pedals a bike dozens of miles and thousands of feet up a mountain, only to ride back down?” she asks me after a moment of reflection. “And who calls that fun? Alright. Maybe we mountain bikers are a little crazy, I concede. ",
        "author": "johndoe",
        "comments": [],
        "likes": [],
        "authorId": "65804e538dd0c3601687a742",
        "createdAt": "2023-12-21T18:03:17.173Z",
        "updatedAt": "2023-12-21T18:03:17.173Z",
        "__v": 0,
        "email": "johndoe@gmail.com",
        "username": "johndoe"
    },
    {
        "_id": "658580811c65dc6e4046dd39",
        "title": "Zen and the Art of Mountain Biking 4",
        "description": "Cycling is meditation in motion. 4",
        "para1": "We mountain bikers tend to get a bad rap.I for one, when I mention my love of mountain biking, am often met with looks of disgust and disappointment. Trail runners don’t like us. Roadies hate us. Hikers despise us. Even internet search algorithms seem to have a bias against us mountain bikers. During the coronavirus pandemic, when I began to wonder why brake pads had become scarce commodities, I typed the words why are mountain bike… into an internet search bar. Why are mountain bike brake pads so hard to find? I intended to inquire. But the search bar auto-filled: …rs such douchebags.",
        "para2": "Why are mountain bikers such douchebags? Perhaps it’s a question you’ve considered yourself. You mountain bikers are crazy,” a friend of mine by the name of Alyssa once declared in response to my long-winded, wild-eyed ramblings on about the beauty and allure of mountain biking — the poetry of cycling, if you will. Her eyes were narrowed with incredulous skepticism. After one too many near run-ins with mountain bikers on her local trails in Boulder, Colorado, she’s begun to view mountain bikes and the “adrenaline junkies” who ride them with disdain. She hikes. She runs trails. She even road bikes. But when it comes to mountain biking, she just doesn’t get it. And she has a point, as much as I hate to admit it, the avid mountain biker that I am. ",
        "para3": "If, on several occasions, I’d nearly been run over by some asshole hauling ass down trail, I’d probably be a little resentful, too. But you’re always going to have a few bad apples, I tell her. You can’t write all of us off because of a few reckless riders. Alyssa’s contempt for mountain biking runs deeper than her hatred for reckless riders, however. She shakes her head, searching for words sufficient to articulate her antipathy toward us mountain bikers. What sane person pedals a bike dozens of miles and thousands of feet up a mountain, only to ride back down?” she asks me after a moment of reflection. “And who calls that fun? Alright. Maybe we mountain bikers are a little crazy, I concede. ",
        "comments": [],
        "likes": [],
        "authorId": "658477b692b118ba6c8acf64",
        "createdAt": "2023-12-22T12:26:41.924Z",
        "updatedAt": "2023-12-22T12:26:41.924Z",
        "__v": 0,
        "email": "janedoe@gmail.com",
        "username": "janedoe"
    },
    {
        "_id": "658580de1c65dc6e4046dd40",
        "title": "Zen and the Art of Mountain Biking 4",
        "description": "Cycling is meditation in motion. 4",
        "para1": "We mountain bikers tend to get a bad rap.I for one, when I mention my love of mountain biking, am often met with looks of disgust and disappointment. Trail runners don’t like us. Roadies hate us. Hikers despise us. Even internet search algorithms seem to have a bias against us mountain bikers. During the coronavirus pandemic, when I began to wonder why brake pads had become scarce commodities, I typed the words why are mountain bike… into an internet search bar. Why are mountain bike brake pads so hard to find? I intended to inquire. But the search bar auto-filled: …rs such douchebags.",
        "para2": "Why are mountain bikers such douchebags? Perhaps it’s a question you’ve considered yourself. You mountain bikers are crazy,” a friend of mine by the name of Alyssa once declared in response to my long-winded, wild-eyed ramblings on about the beauty and allure of mountain biking — the poetry of cycling, if you will. Her eyes were narrowed with incredulous skepticism. After one too many near run-ins with mountain bikers on her local trails in Boulder, Colorado, she’s begun to view mountain bikes and the “adrenaline junkies” who ride them with disdain. She hikes. She runs trails. She even road bikes. But when it comes to mountain biking, she just doesn’t get it. And she has a point, as much as I hate to admit it, the avid mountain biker that I am. ",
        "para3": "If, on several occasions, I’d nearly been run over by some asshole hauling ass down trail, I’d probably be a little resentful, too. But you’re always going to have a few bad apples, I tell her. You can’t write all of us off because of a few reckless riders. Alyssa’s contempt for mountain biking runs deeper than her hatred for reckless riders, however. She shakes her head, searching for words sufficient to articulate her antipathy toward us mountain bikers. What sane person pedals a bike dozens of miles and thousands of feet up a mountain, only to ride back down?” she asks me after a moment of reflection. “And who calls that fun? Alright. Maybe we mountain bikers are a little crazy, I concede. ",
        "comments": [],
        "likes": [],
        "authorId": "658477b692b118ba6c8acf64",
        "createdAt": "2023-12-22T12:28:14.149Z",
        "updatedAt": "2023-12-22T12:28:14.149Z",
        "__v": 0,
        "email": "janedoe@gmail.com",
        "username": "janedoe"
    },
    {
        "_id": "658581ba9cc6364a3421aa4f",
        "title": "Zen and the Art of Mountain Biking 4",
        "description": "Cycling is meditation in motion. 4",
        "para1": "We mountain bikers tend to get a bad rap.I for one, when I mention my love of mountain biking, am often met with looks of disgust and disappointment. Trail runners don’t like us. Roadies hate us. Hikers despise us. Even internet search algorithms seem to have a bias against us mountain bikers. During the coronavirus pandemic, when I began to wonder why brake pads had become scarce commodities, I typed the words why are mountain bike… into an internet search bar. Why are mountain bike brake pads so hard to find? I intended to inquire. But the search bar auto-filled: …rs such douchebags.",
        "para2": "Why are mountain bikers such douchebags? Perhaps it’s a question you’ve considered yourself. You mountain bikers are crazy,” a friend of mine by the name of Alyssa once declared in response to my long-winded, wild-eyed ramblings on about the beauty and allure of mountain biking — the poetry of cycling, if you will. Her eyes were narrowed with incredulous skepticism. After one too many near run-ins with mountain bikers on her local trails in Boulder, Colorado, she’s begun to view mountain bikes and the “adrenaline junkies” who ride them with disdain. She hikes. She runs trails. She even road bikes. But when it comes to mountain biking, she just doesn’t get it. And she has a point, as much as I hate to admit it, the avid mountain biker that I am. ",
        "para3": "If, on several occasions, I’d nearly been run over by some asshole hauling ass down trail, I’d probably be a little resentful, too. But you’re always going to have a few bad apples, I tell her. You can’t write all of us off because of a few reckless riders. Alyssa’s contempt for mountain biking runs deeper than her hatred for reckless riders, however. She shakes her head, searching for words sufficient to articulate her antipathy toward us mountain bikers. What sane person pedals a bike dozens of miles and thousands of feet up a mountain, only to ride back down?” she asks me after a moment of reflection. “And who calls that fun? Alright. Maybe we mountain bikers are a little crazy, I concede. ",
        "comments": [],
        "likes": [],
        "authorId": "658477b692b118ba6c8acf64",
        "createdAt": "2023-12-22T12:31:54.453Z",
        "updatedAt": "2023-12-22T12:31:54.453Z",
        "__v": 0,
        "email": "janedoe@gmail.com",
        "username": "janedoe"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete A Blog
### Method: DELETE
>```
>undefined
>```
### Response: undefined
```json
{
    "message": "Blog Successfully Deleted."
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get A Blog
Get A Single Blog
### Method: GET
>```
>undefined
>```
### Response: undefined
```json
{
    "_id": "658581ba9cc6364a3421aa4f",
    "title": "Zen and the Art of Mountain Biking 4",
    "description": "Cycling is meditation in motion. 4",
    "para1": "We mountain bikers tend to get a bad rap.I for one, when I mention my love of mountain biking, am often met with looks of disgust and disappointment. Trail runners don’t like us. Roadies hate us. Hikers despise us. Even internet search algorithms seem to have a bias against us mountain bikers. During the coronavirus pandemic, when I began to wonder why brake pads had become scarce commodities, I typed the words why are mountain bike… into an internet search bar. Why are mountain bike brake pads so hard to find? I intended to inquire. But the search bar auto-filled: …rs such douchebags.",
    "para2": "Why are mountain bikers such douchebags? Perhaps it’s a question you’ve considered yourself. You mountain bikers are crazy,” a friend of mine by the name of Alyssa once declared in response to my long-winded, wild-eyed ramblings on about the beauty and allure of mountain biking — the poetry of cycling, if you will. Her eyes were narrowed with incredulous skepticism. After one too many near run-ins with mountain bikers on her local trails in Boulder, Colorado, she’s begun to view mountain bikes and the “adrenaline junkies” who ride them with disdain. She hikes. She runs trails. She even road bikes. But when it comes to mountain biking, she just doesn’t get it. And she has a point, as much as I hate to admit it, the avid mountain biker that I am. ",
    "para3": "If, on several occasions, I’d nearly been run over by some asshole hauling ass down trail, I’d probably be a little resentful, too. But you’re always going to have a few bad apples, I tell her. You can’t write all of us off because of a few reckless riders. Alyssa’s contempt for mountain biking runs deeper than her hatred for reckless riders, however. She shakes her head, searching for words sufficient to articulate her antipathy toward us mountain bikers. What sane person pedals a bike dozens of miles and thousands of feet up a mountain, only to ride back down?” she asks me after a moment of reflection. “And who calls that fun? Alright. Maybe we mountain bikers are a little crazy, I concede. ",
    "comments": [],
    "likes": [],
    "authorId": "658477b692b118ba6c8acf64",
    "createdAt": "2023-12-22T12:31:54.453Z",
    "updatedAt": "2023-12-22T12:31:54.453Z",
    "__v": 0,
    "username": "janedoe",
    "email": "janedoe@gmail.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
