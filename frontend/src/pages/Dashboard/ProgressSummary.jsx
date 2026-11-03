export default function ProgressSummary({ tasks = []}) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    const remainingTasks = totalTasks - completedTasks;

    const progressPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    return (
        <section className="progress-summary">
            <div className="progress-summary-header">
                <div>
                    <h2>Today's Progress</h2>
                    <p>Here are your progress statistics for today.</p>
                </div>

                <span className="progress-percentage">{progressPercentage}%</span>
            </div>

            <div
                className="progress-bar"
                role="progressbar"
                aria-label="Task completion progress"
                aria-valuenow={progressPercentage}
                aria-valuemin={0}
                aria-valuemax={100}
                ></div>

            <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
                ></div>


            <div className="progress-stats">
                <div className="progress-stat">
                    <span className="stat-value">{totalTasks}</span>
                    <span className="stat-label">Total Tasks</span>
                </div>

                <div className="progress-stat">
                    <span className="stat-value">{completedTasks}</span>
                    <span className="stat-label">Tasks Completed</span>
                </div>

                <div className="progress-stat">
                    <span className="stat-value">{remainingTasks}</span>
                    <span className="stat-label">Tasks Remaining</span>
                </div>
            </div>
        </section>
    );
}