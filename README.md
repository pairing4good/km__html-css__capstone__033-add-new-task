# 033 Add New Task

[![032 Customer Feedback](https://img.youtube.com/vi/QR5TNBROwYw/0.jpg)](https://www.youtube.com/watch?v=QR5TNBROwYw)

```
Given that a description is provided 
When I add a new task 
Then a new task is created with that description
And a status of todo
```

```
Given that a description is provided 
And a status of doing is selected
When I add a new task 
Then a new task is created with that description
And a status of doing
```

```
Given that a description is provided 
And a status of done is selected
When I add a new task 
Then a new task is created with that description
And a status of done
```

Steps:
- Add a text input to the task-form
- Add a text input placeholder that says "task description"
- Make the text input required
- Add a status dropdown to the task-form
- Add an Add button to the task-form

Resources:
- https://www.w3schools.com/tags/tag_input.asp
- https://www.w3schools.com/tags/att_input_placeholder.asp
- https://www.w3schools.com/tags/att_required.asp
- https://www.w3schools.com/tags/tag_select.asp
- https://www.w3schools.com/tags/tag_button.asp
