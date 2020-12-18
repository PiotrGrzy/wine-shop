import React from "react"

import { FaDhl } from "react-icons/fa"
import {
  BsPersonSquare,
  BsFillLockFill,
  BsFillEnvelopeFill,
} from "react-icons/bs"

export const shippingMethods = [
  {
    value: "courier",
    label: "DHL Courier",
    icon: <FaDhl size="40" />,
  },
  {
    value: "personal",
    label: "Personal pickup",
    icon: <BsPersonSquare size="30" />,
  },

  {
    value: "inpost",
    label: "Inpost parcel locker",
    icon: <BsFillLockFill size="30" />,
  },
  {
    value: "mail",
    label: "Poczta Polska",
    icon: <BsFillEnvelopeFill size="30" />,
  },
]
