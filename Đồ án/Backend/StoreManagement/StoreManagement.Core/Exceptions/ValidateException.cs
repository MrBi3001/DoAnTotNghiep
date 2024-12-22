using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Exceptions
{
    public class ValidateException : Exception
    {
        string? _message = null;

        public ValidateException(string message)
        {
            this._message = message;
        }

        public override string Message => _message;
    }
}
