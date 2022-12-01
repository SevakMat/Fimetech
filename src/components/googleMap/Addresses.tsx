import React, { FC } from "react"
import { useEffect, useState } from "react"
import { getAddressesEffect } from "../../store/effects/googleMap.effects"
import { IAddressesContainer } from "../interfaces"
import "../scss/addresses.scss"


const AddressesContainer: FC<IAddressesContainer> = ({ user }) => {

  const [addresses, setAddresses] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const address = await getAddressesEffect(user.userId)
      setAddresses(address)

    }
    fetchData()
      .catch(console.error);
  }, [])


  return (
    <div className="addressesBlok">
      {
        addresses && addresses.map((address,index) => {
          return (
            <div  key={index}>
              asasdasdasd
            </div>
          )
        })
      }
    </div>
  )
}

export default AddressesContainer