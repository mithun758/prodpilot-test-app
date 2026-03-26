"""Payment processing service — currently supports cards only."""
from enum import Enum

class PaymentMethod(Enum):
    CARD = "card"
    # UPI = "upi"  # Not yet implemented
    # NETBANKING = "netbanking"  # Not yet implemented

class PaymentService:
    """
    Handles payment processing.
    Currently only card payments are supported.
    Indian payment methods (UPI, NetBanking) are not yet implemented.
    """
    
    def process_payment(
        self, 
        amount: float, 
        currency: str,
        method: PaymentMethod,
        user_id: str,
    ) -> dict:
        """Process a payment transaction."""
        pass
    
    def get_payment_history(self, user_id: str) -> list:
        """Fetch payment history for a user."""
        pass
    
    def refund(self, transaction_id: str) -> bool:
        """Initiate a refund for a transaction."""
        pass
