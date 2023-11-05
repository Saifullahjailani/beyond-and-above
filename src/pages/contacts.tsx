import React from 'react'
import DefaultLayout from '../components/Layout/DefaultLayout';
import ContactsComp from '../components/ContactsComp';

const contacts = () => {
  return (
    <DefaultLayout isMain>
      <ContactsComp></ContactsComp>
    </DefaultLayout>
  )
}

export default contacts;