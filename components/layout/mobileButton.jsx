import react, { useContext } from "react";
import { H1 } from "../utils/headlines";
import Button from "../utils/buttons";
import { ShowUnclaimed } from "../../helper/context";

function MobileButton(props) {
    return (
        <div className={`${props.klasse}`}>
            <Button // style={{ background: colors.primaryColor.toLowerCase() }}
                klasse={`${props.buttonKlasse} bg-black hover:bg-primaryColorDark py-2 px-6 rounded-lg text-white font-semibold uppercase text-base leading-loose tracking-wider cursor-pointer`}
                onClick={props.onClick}
            >
                {props.buttonText}
            </Button>
        </div>
    );
}

export default MobileButton;
