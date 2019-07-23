import React from 'react';

function Contact() {
    return (
        <section id="contact">
            <form>
                <div class="form-group">
                    {/* <label for="exampleInputEmail1">Email address</label> */}
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    {/* <label for="subject">Subject</label> */}
                    <input type="text" class="form-control" id="subject" aria-describedby="subjectHelp" placeholder="Enter subject" />
                </div>
                <div className="form-group">
                    {/* <label for="content">Content</label> */}
                    <textarea class="form-control" aria-label="With textarea" id="content" placeholder="Write content here.." rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Contact</button>
            </form>
        </section>
    );
}
export default Contact;