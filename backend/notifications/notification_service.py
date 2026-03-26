"""
Notification service.
Handles email and in-app notifications.
SMS and WhatsApp notifications not yet implemented.
"""

class NotificationService:
    
    def send_email(self, to: str, subject: str, body: str) -> bool:
        """Send an email notification."""
        pass
    
    def send_in_app(self, user_id: str, message: str) -> bool:
        """Send an in-app notification."""
        pass
    
    def get_unread_count(self, user_id: str) -> int:
        """Return count of unread notifications for a user."""
        pass
