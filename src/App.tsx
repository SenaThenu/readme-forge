export default function App() {
    return (
        <div id="app">
            <div className="nav-bar"></div>
            <div className="forge-area">
                <div className="left-pane">
                    <div className="selected-components"></div>
                    <div className="available-components"></div>
                </div>
                <div className="component-form"></div>
                <div className="markdown-preview"></div>
            </div>
        </div>
    );
}
