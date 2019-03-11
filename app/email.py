from threading import Thread
from flask import current_app
from flask_mail import Message
from app import mail


def send_email(subject, sender, recipients, body, html, attachments=None, sync=False):
    msg = Message(subject=subject, sender=sender, recipients=recipients, body=body, html=html)
    if attachments:
        for attachment in attachments:
            msg.attach(*attachment)
    if sync:
        mail.send(msg)
    else:
        Thread(target=send_async_email, args=(current_app._get_current_object(), msg)).start()

def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)