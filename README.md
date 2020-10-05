Task 1. Caesar cipher CLI tool

Implement CLI tool that will encode and decode a text by Caesar cipher.

CLI tool should accept 4 options (short alias and full name):

    -s, --shift: a shift
    -i, --input: an input file
    -o, --output: an output file
    -a, --action: an action encode/decode

Details:

    For command-line arguments could be used one of

    https://www.npmjs.com/package/commander
    https://www.npmjs.com/package/minimist or any other module.

    Action (encode/decode) and the shift are required, if one of them missed - an error should be shown, the process should exit with non-zero status code.
    If the input file is missed - use stdin as an input source.
    If the output file is missed - use stdout as an output destination.
    If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error should be printed in stderr.
    If passed params are fine the output (file or stdout) should contain encoded/decoded content of input (file or stdin).
    For encoding/decoding use only the English alphabet, all other characters should be kept untouched.

Hints: As suggested solution to make streams code more robust, and memory effective, consider to use pipeline method. Structure can be the following:

pipeline(
input_stream, // input file stream or stdin stream
transform_stream, // standard Transform stream or https://github.com/rvagg/through2
output_stream // output file stream or stdout stream
)
.then(success and error callbacks)

Usage example:

\$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

\$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt

\$ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt

    input.txt This is secret. Message about "_" symbol!

    output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

Критерии оценки заданий
Task 1. Caesar cipher CLI tool

Каждый пункт 10 баллов, частичная реализация пункта 5 баллов. Каждый коммит после дедлайна (за исключением коммитов в README.md) минус 10 баллов

    в корне репозитория создана папка с произвольным названием (например caesar-cipher-cli, task1 и т.п.), в которой расположены файлы с кодом программы
    в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению
    если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются
    если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0
    если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0
    если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin
    если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout
    шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются
    если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст
    кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемыми задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.)

N.B. console.error пишет ошибку в process.stderr, большинство библиотек для парсинга параметров при ошибке также пишут в process.stderr. В VS Code, если запустить приложение в режиме дебага, можно увидеть в панели output, что цвет сообщений, выводимых в process.stdout и process.stderr отличаются.
