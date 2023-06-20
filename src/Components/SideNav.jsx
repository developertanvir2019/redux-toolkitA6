const SideNav = ({ setFilter, filter, selectOption, setSelectOption }) => {
    return (
        <aside>
            <div class="sidebar-items">
                <div class="sidebar-content">
                    <h4>Sort</h4>
                    <select value={selectOption} onChange={(e) => setSelectOption(e.target.value)} name="sort" id="lws-sort" class="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                        <option value="">Default</option>
                        <option value="newest">Newest</option>
                        <option value="most_liked">Most Liked</option>
                    </select>
                </div>
                <div class="sidebar-content">
                    <h4>Filter</h4>
                    <div class="radio-group">
                        <div onClick={() => setFilter('All')}>
                            <input type="radio" name="filter" id="lws-all" checked={filter === 'All'} class="radio" />
                            <label for="lws-all">All</label>
                        </div>
                        <div onClick={() => setFilter('Saved')}>
                            <input type="radio" name="filter" id="lws-saved" checked={filter === "Saved"} class="radio" />
                            <label for="lws-saved">Saved</label>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideNav;