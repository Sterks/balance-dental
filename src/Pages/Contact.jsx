import React from 'react';
import LowerFooter from '../Components/LowerFooter';
import './Contact.css';
import JuxtaposeSL from './JuxtaposeSL';
const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: 'Понедельник',
      c_time: '10:00-20:00',
    },
    {
      id: 2,
      c_day: 'Вторник',
      c_time: '10:00-20:00',
    },
    {
      id: 3,
      c_day: 'Среда',
      c_time: '10:00-20:00',
    },
    {
      id: 4,
      c_day: 'Четверг',
      c_time: '10:00-20:00',
    },
    {
      id: 5,
      c_day: 'Пятница',
      c_time: '10:00-20:00',
    },
    {
      id: 6,
      c_day: 'Суббота',
      c_time: '10:00-20:00',
    },
    {
      id: 7,
      c_day: 'Воскресенье',
      c_time: '10:00-20:00',
    },
  ];
  return (
    <>
    <h1>Test</h1>
      <div className="contact_section_container" id="contact-us">
        <div className="container_container">
          <div className="google_map_location">
            <div className="gmap">
              <iframe
                title="gmap_location" 
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2183.5685435344453!2d35.87053155694225!3d56.81903459117209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTbCsDQ5JzA4LjUiTiAzNcKwNTInMTkuMCJF!5e0!3m2!1sru!2saz!4v1748949145396!5m2!1sru!2saz"
              ></iframe>
            </div>
          </div>
          <div className="basic_contact_user_form">
            <div className="clinic_time_table">
              <h2 style={{ fontFamily: 'Poppins' }}>
                <span>
                  <i className="fa-solid fa-angles-right"></i>
                </span>
                Часы приёма
              </h2>
            </div>
            <hr />
            {clinic_data.map((e, index) => (
              <div className="clinic_timing" key={index}>
                <p className="current_day">{e.c_day}</p>
                <p className="current_day_timing">{e.c_time}</p>
              </div>
            ))}
            <div className="d_and_c">
              <div className="direction_to_clinic">
                <a
                  href="https://www.google.com/maps?ll=18.978293,73.030934&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=2928691504663646078"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Направление
                </a>
              </div>
              <div className="call_to_clinic">
                <a href="tel:9892729909">Позвоните</a>
              </div>
            </div>
          </div>
        </div>
        <LowerFooter />

        <div className="copyright_footer">
          <p>
            <span>
              <i className="fa-regular fa-copyright"></i>
            </span>
            2025
            <a href="/" id="clinic_name">
              Клиника - Равновесие.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
