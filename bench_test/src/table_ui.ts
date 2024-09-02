import { benchMarkingFunctions } from "./bench";

const resultToHtmlTable = (result: (Record<string, string | number> | null)[]) => {
    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th>Task Name</th>
          <th>ops/sec</th>
          <th>Average Time (ms)</th>
          <th>Margin</th>
          <th>Samples</th>
        </tr>
      </thead>
      <tbody>
        ${result.map(task => {
        if (task) {
            return `
              <tr>
                <td>${task['Task Name']}</td>
                <td>${task['ops/sec']}</td>
                <td>${Number(task['Average Time (ns)'])/1000}</td>
                <td>${task['Margin']}</td>
                <td>${task['Samples']}</td>
              </tr>
            `;
        }
        return '';
    }).join('')}
      </tbody>
    `;
    return table;
};

export const startBenching =
    (element: HTMLButtonElement, report: HTMLDivElement) => {
        report.innerHTML = "";
        element.addEventListener('click', async () => {
            element.innerHTML = "Loading..."
            report.appendChild(resultToHtmlTable(await benchMarkingFunctions()))
            element.innerHTML = "Start"
        })
    }
        

