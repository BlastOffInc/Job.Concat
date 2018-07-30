import React from 'react';

/**
 * @description Component used to display svg logo for Job concat.
 * The only thing in this component is the svg.
**/

const Banner = () => (
  <React.Fragment>
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="64">
    <path d="M230.1 20.5c-.3-1.2-.8-2-2.3-3.5-1.4-1.5-2.5-1.7-4.1-2.3a18 18 0 0 0-10.8.1c-3 .8-5.5 2.9-5.4 6.3 0 1.3.5 3.4 2 3.9 2.3.8 3-1.4 3.5-3.1.7-2.1 1.5-3.1 3.7-3.6 2.2-.4 4.5-.4 6.5.7 1.6.9 2.2 2.1 2.4 3.9.1.7.4 3.4-.5 3.7-1.4.5-3 .6-4.5.7-1.7.2-3.3.4-5 .8-2.9.6-5.5 1.4-8.5 1.1-1.7-.2-4.9-.8-5.1-.5-.3.3 2.7 3.8 2.8 5.8.1 2-.7 1-2.2 1.3-.7.2-.2 1.1.4 1.2.5 0 1.6-.2 1.7.3.4 2.2-1.5.6-2.5 1.4-.9.7.6 1 1 .9 1-.1 1.3-.2 1.5.9.4 1.7 2.4 1.9 2.7 3.3.3 1.3.7 2.9 1.9 3.6 1.7 1 1.4-1.8 1.9-2.3.8-.8 2.8-.2 3.3.6.3.6 1.1 2.8 2.1 1.3 1-1.4 1-2.3 2.7-2.7.5-.1 2.8-1 3-.2l.3 1.8c.3.6 1.4 0 1.5-.5.1-.5 0-3.1.6-3.3 1.9-.7 1.7.8 1.9 2.1 0 .4 0 1.3.3 1.6.7.5 1.2-.2 1.4-.8.6-1.4 1-3 1.4-4.5.5-1.7.4-3.4.4-5.2v-9.2c.1-1.6.4-3.8 0-5.6-.2-.9.2.9 0 0zm-15.8 9.6c.2-1.1 6.2-2.2 6.7-1.5.5.8-.2 6.9-1.8 5.8-.8-.5 1.5-4.6-.5-4.2-1.1.2-2.2.7-3.4 1-.9.3-1.1-.1-1-1.1zm-3.8 7.9c1.1-2 2.8.4 2 .9-.8.4-2.7.3-2-.9zm-1.3 0c-1.1.6-3.2.2-3.5-1.2-.3-1.7.3-2.5 1.8-3 .3-.1 1.5 1.6 1.7 1.8.6.9 1.4 1.6 0 2.4zm3.6 3.1c-.5-.4-1.3-1.7-1.8-.4-.4 1.1-1.1.1-.7-.8.2-.2 1-.7 1.7-.6.5 0 .8.4 1.1.8.3.3.4 1.6-.3 1zm2.7-2.9c-.8.1-1.8.1-2.4-.6-.1-.1-.8-1.2-.7-1.3l2.6-1.9c3.1-2.3 3.4 3.4.5 3.8zm8.5.9c-.1.2-1.4.1-1.7.1-.6 0-.4.5-.5 1a2.7 2.7 0 0 1-2.9 2.4c-.3 0-1.7-.8-1.3-1.2.6-.5 1.3-.5 1.8-1.3.5-.7.4-1.6.3-2.4 0-.3-.5-1.9-.2-2 1-.5 2.4-.8 3.5-1 1.2-.2 1.4 1.6.5 1.7-.6.1-3-.1-1.9 1.4.2.2 1.4.1 1.6.1.7 0 1.3.5.8 1.2zM26.4 22v26.3c0 3-.8 5.3-2.4 6.9s-3.8 2.4-6.6 2.4l-1.7-.1-1.6-.3.3-5.2 1.1.2 1.1.1c.9 0 1.6-.3 2.1-1s.8-1.6.8-3V22h6.9zm-.1-6.1h-6.9v-5.1h6.9v5.1zM30.7 34.4c0-3.8 1.1-6.9 3.2-9.3s5-3.6 8.8-3.6c3.8 0 6.7 1.2 8.8 3.6s3.2 5.5 3.2 9.3v.5c0 3.8-1.1 6.9-3.2 9.3s-5 3.6-8.8 3.6c-3.8 0-6.7-1.2-8.8-3.6s-3.2-5.5-3.2-9.3v-.5zm6.8.5c0 2.3.4 4.2 1.2 5.6.8 1.4 2.1 2.1 3.9 2.1 1.8 0 3.1-.7 3.9-2.1.8-1.4 1.2-3.3 1.2-5.5v-.5c0-2.2-.4-4.1-1.2-5.5s-2.1-2.1-3.9-2.1c-1.8 0-3.1.7-3.9 2.1s-1.2 3.3-1.2 5.5v.4zM81.7 35.4c0 3.8-.8 6.8-2.5 9.1s-4.1 3.4-7.3 3.4c-1.5 0-2.8-.3-3.9-.9s-2-1.5-2.8-2.7l-.5 3.1h-5.9V10.8h6.8v13.9a7.1 7.1 0 0 1 6.1-3.1c3.2 0 5.7 1.2 7.4 3.6s2.5 5.7 2.5 9.7v.5zm-6.8-.5c0-2.5-.4-4.5-1.1-5.9s-2-2.2-3.7-2.2c-1.1 0-2 .2-2.7.7-.7.4-1.3 1.1-1.7 1.9v10.8c.4.8 1 1.4 1.7 1.8s1.7.6 2.7.6c1.8 0 3-.6 3.7-1.9s1.1-3 1.1-5.3v-.5zM93.6 47.4h-6.8v-6h6.8v6zM110.6 42.6c1.2 0 2.2-.4 2.9-1.1s1.1-1.7 1.1-2.8h6.2l.1.1c.1 2.6-.9 4.7-2.9 6.4s-4.5 2.6-7.4 2.6c-3.8 0-6.7-1.2-8.7-3.6s-3.1-5.5-3.1-9.2v-.7c0-3.7 1-6.8 3.1-9.2s4.9-3.6 8.7-3.6c3.1 0 5.6.9 7.6 2.7s2.8 4.1 2.8 7v.1h-6.2c0-1.3-.4-2.4-1.1-3.3s-1.7-1.3-3-1.3c-1.8 0-3.1.7-3.8 2.1s-1.1 3.2-1.1 5.4v.8c0 2.3.4 4.1 1.1 5.5.6 1.4 1.8 2.1 3.7 2.1zM123.7 34.4c0-3.8 1.1-6.9 3.2-9.3s5-3.6 8.8-3.6c3.8 0 6.7 1.2 8.8 3.6s3.2 5.5 3.2 9.3v.5c0 3.8-1.1 6.9-3.2 9.3s-5 3.6-8.8 3.6a11 11 0 0 1-8.8-3.6 13.6 13.6 0 0 1-3.2-9.3v-.5zm6.8.5c0 2.3.4 4.2 1.2 5.6.8 1.4 2.1 2.1 3.9 2.1 1.8 0 3.1-.7 3.9-2.1.8-1.4 1.2-3.3 1.2-5.5v-.5c0-2.2-.4-4.1-1.2-5.5s-2.1-2.1-3.9-2.1c-1.8 0-3.1.7-3.9 2.1s-1.2 3.3-1.2 5.5v.4zM158.1 22l.3 3.6c.8-1.3 1.9-2.3 3.1-3s2.6-1.1 4.1-1.1c2.6 0 4.6.8 6 2.4s2.2 4.1 2.2 7.6v15.8H167V31.5c0-1.7-.3-2.9-1-3.6-.7-.7-1.7-1.1-3.1-1.1-.9 0-1.7.2-2.4.6s-1.3.9-1.8 1.6v18.4h-6.8V22h6.2zM189.6 42.6c1.2 0 2.2-.4 2.9-1.1s1.1-1.7 1.1-2.8h6.2l.1.1c.1 2.6-.9 4.7-2.9 6.4s-4.5 2.6-7.4 2.6c-3.8 0-6.7-1.2-8.7-3.6s-3.1-5.5-3.1-9.2v-.7c0-3.7 1-6.8 3.1-9.2s4.9-3.6 8.7-3.6c3.1 0 5.6.9 7.6 2.7s2.8 4.1 2.8 7v.1h-6.2c0-1.3-.4-2.4-1.1-3.3s-1.7-1.3-3-1.3c-1.8 0-3.1.7-3.8 2.1s-1.1 3.2-1.1 5.4v.8c0 2.3.4 4.1 1.1 5.5.6 1.4 1.9 2.1 3.7 2.1zM242.7 15.8V22h4.3v4.8h-4.3v12.9c0 1 .2 1.7.6 2.1s1 .6 1.6.6l.9-.1.9-.2.6 4.9a19.4 19.4 0 0 1-4.1.7c-2.4 0-4.2-.6-5.4-1.9s-1.9-3.4-1.9-6.2V26.8h-3.7V22h3.7v-6.2h6.8z"/>
    </svg>
  </React.Fragment>
)

export default Banner;