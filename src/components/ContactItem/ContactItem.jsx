const ContactItem = ({ contact: { name, number, id }, handleDelete }) => {
  return (
    <li>
      {name}: {number}
      <button className="" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
