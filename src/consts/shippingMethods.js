import React from "react"

import { FaDhl } from "react-icons/fa"
import { BsPersonSquare } from "react-icons/bs"
import InPostIcon from "../svgs/inpost-logo.svg"
import PocztaPolskaIcon from "../svgs/poczta-polska.svg"

export const shippingMethods = [
  {
    value: "courier",
    label: "DHL Courier",
    icon: <FaDhl size="30" />,
  },
  {
    value: "personal",
    label: "Personal pickup",
    icon: <BsPersonSquare size="30" />,
  },

  {
    value: "inpost",
    label: "Inpost parcel locker",
    icon: <InPostIcon width="50" height="50" />,
  },
  {
    value: "mail",
    label: "Poczta Polska",
    icon: <PocztaPolskaIcon width="50" height="50" />,
  },
]
