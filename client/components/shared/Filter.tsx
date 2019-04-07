import React, { ChangeEvent } from 'react';

type Option = {
    value: string,
    label: string,
};
export type IFilterProps = {
    options: Array<Option>;
    label: string;
    onChange: (event: ChangeEvent) => void;
};

export const BasicFilter: React.FC<IFilterProps> = ({ label, options, onChange }) => (
    <div className="filter">
        <span>{label}: </span>
        <select className="select" onChange={ onChange } disabled={options.length === 0}>
            <option value="">None</option>
            { options.map(({label, value}, i) => <option key={ i } value={value}>{ label }</option>) }
        </select>
    </div>
);
