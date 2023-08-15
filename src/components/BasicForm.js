import useMojHook from "../hooks/moj-hook";
const BasicForm = (props) => {
  const {
    value: ubacenoIme,
    daLiJeValidno: ubacenoImeJeValidno,
    imaGresku: unetoImeImaGresku,
    vrednostChangeHandler: imeChangeHandler,
    vrednostBlurHandler: imeBlurHandler,
    resetovanje: resetovanjeUnetogImena,
  } = useMojHook((value) => value.trim() !== "");

  const {
    value: ubacenoPrezime,
    daLiJeValidno: ubacenoPrezimeJeValidno,
    imaGresku: unetoPrezimeImaGresku,
    vrednostChangeHandler: prezimeChangeHandler,
    vrednostBlurHandler: prezimeBlurHandler,
    resetovanje: resetovanjeUnetogPrezimena,
  } = useMojHook((value) => value.trim() !== "");

  const {
    value: ubaceniMejl,
    daLiJeValidno: ubaceniMejlJeValidan,
    imaGresku: unetiMejlImaGresku,
    vrednostChangeHandler: mejlChangeHandler,
    vrednostBlurHandler: mejlBlurHandler,
    resetovanje: resetovanjeUnetogMejla,
  } = useMojHook((value) => value.includes("@"));

  let newFormIsValid = false;

  if (ubacenoImeJeValidno && ubacenoPrezimeJeValidno && ubaceniMejlJeValidan) {
    newFormIsValid = true;
  }

  const basicFormSubmissionHandler = (event) => {
    event.preventDefault();

    if (!newFormIsValid) {
      return;
    }

    console.log("Submitted");
    console.log(ubacenoIme, ubacenoPrezime, ubaceniMejl);

    resetovanjeUnetogImena();

    resetovanjeUnetogPrezimena();

    resetovanjeUnetogMejla();
  };

  const nameInputClasses = unetoImeImaGresku || unetoPrezimeImaGresku || unetiMejlImaGresku ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={basicFormSubmissionHandler}>
      <div className={nameInputClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onChange={imeChangeHandler} onBlur={imeBlurHandler} value={ubacenoIme} />
          {unetoImeImaGresku && <p className="error-text">First name must not be empty.</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" onChange={prezimeChangeHandler} onBlur={prezimeBlurHandler} value={ubacenoPrezime} />
          {unetoPrezimeImaGresku && <p className="error-text">Last name must not be empty.</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">E-Mail Address</label>
          <input type="text" id="name" onChange={mejlChangeHandler} onBlur={mejlBlurHandler} value={ubaceniMejl} />
          {unetiMejlImaGresku && <p className="error-text">Email must not be empty and must include @.</p>}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!newFormIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
