import React from "react"

import { BiCreditCard, BiCreditCardFront } from "react-icons/bi"
import { GiReceiveMoney } from "react-icons/gi"

export const paymentMethods = [
  {
    value: "credit-card",
    label: "Credit Card",
    icon: <BiCreditCard size="30" />,
  },
  {
    value: "blik",
    label: "Blik",
    icon: <BiCreditCardFront size="30" />,
  },
  {
    value: "cash",
    label: "Cash at delivery",
    icon: <GiReceiveMoney size="30" />,
  },
]
