'use client';
import { useState } from 'react';
import FormInput from '@/app/components/FormInput';
import Link from 'next/link';

export default function GuestTickets() {
  const [guestData, setGuestData] = useState<{
    name: string;
    email: string;
  }>({
    name: '',
    email: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      errorMsg:
        'För- och efternamn borde vara mellan 4-30 tecken och får inte innehålla några specialtecken',
      label: 'För- och efternamn',
      pattern: '^[A-ZÅÄÖa-zåäö]+ [A-ZÅÄÖa-zåäö]{2,30}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      errorMsg: 'Ange en giltig e-postadress',
      label: 'E-postadress',
      required: true,
    },
    /*
    No use for phonenumber right now, but saved it for future
    {
      id: 3,
      name: 'number',
      type: 'tel',
      errorMsg: 'Ange ett giltigt telefonnummer',
      label: 'Telefonnummer',
      minLength: '7',
      maxLength: '20',
      required: true,
    },*/
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const onChange = (e: any) => {
    setGuestData({ ...guestData, [e.target.name]: e.target.value });
  };

  return (
    <div className="booking-guest sec-cont">
      <form onSubmit={handleSubmit}>
        <h2>Fortsätt som gäst</h2>
        <h3>Skriv dina uppgifter</h3>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} onChange={onChange} />
        ))}
        <button
          className="primary-btn"
          onClick={() => {
            console.log(guestData);
          }}>
          Fortsätt
        </button>
        <Link href="/" className="cancel-btn">
          Avbryt
        </Link>
      </form>
    </div>
  );
}
