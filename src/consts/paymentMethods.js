import React from "react"

import { BiCreditCard } from "react-icons/bi"
import { BsTerminal } from "react-icons/bs"
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
    icon: <BsTerminal size="30" />,
  },
  {
    value: "cash",
    label: "Cash at delivery",
    icon: <GiReceiveMoney size="30" />,
  },
]
