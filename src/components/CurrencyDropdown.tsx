
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

type Props = {
    onChange: (currency: string) => void;
    currency: string;
    convertText: string;
}


const SORT_OPTIONS = [
    {
        label: "INR",
        value: "inr",
    },
    {
        label: "USD",
        value: "usd",
    },
    {
        label: "NZ",
        value: "nzd",
    },
];

const CurrencyDropdown = ({ currency, onChange, convertText }: Props) => {

    const selectedCurrencyLabel = SORT_OPTIONS.find((option) => option.value === currency)?.label || SORT_OPTIONS[0].label;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer bg-orange-500 text-white rounded-sm px-4 py-2">

                {convertText} : {selectedCurrencyLabel}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {SORT_OPTIONS.map((option) => (
                    <DropdownMenuItem className="cursor-pointer" onClick={() => onChange(option.value)} key={option.label}>
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )

}

export default CurrencyDropdown;