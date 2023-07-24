<template>
<div class="container-fluid">
    <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="name" class="form-control" id="name" aria-describedby="nameInput" placeholder="Enter name">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailInput" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="subject">Subject</label>
            <input type="subject" class="form-control" id="subject" aria-describedby="subjectInput" placeholder="Enter subject">
        </div>  
        <div class="form-group">
            <label for="textArea"></label>
            <textarea class="form-control" id="text" rows="4"></textarea>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="checkbox" value="agree">
            <label class="form-check-label" for="checkbox">I agree to Private Policy</label>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-primary btn-sm">Confirm</button>
        </div>
    </form>
</div>
</template>