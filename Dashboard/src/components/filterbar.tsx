export type FilterBarProps = {
    ToggellDispley: () => void;
    ActiveDispley: ()=> boolean;
};

export default function FilterBar({ ToggellDispley,ActiveDispley }: FilterBarProps) {
    return (
        <section className="filter-bar">
            <button onClick={ActiveDispley}>Active members only</button>
            <button onClick={ToggellDispley}>switch display</button>
        </section>
    );
}

